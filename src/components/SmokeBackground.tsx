"use client";

import { useEffect, useRef, useState } from "react";

const FRAGMENT_SHADER = `#version 300 es
precision highp float;
out vec4 O;
uniform float time;
uniform vec2 resolution;
uniform vec3 u_color;

#define FC gl_FragCoord.xy
#define R resolution
#define T (time+660.)

float rnd(vec2 p){p=fract(p*vec2(12.9898,78.233));p+=dot(p,p+34.56);return fract(p.x*p.y);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(rnd(i),rnd(i+vec2(1,0)),u.x),mix(rnd(i+vec2(0,1)),rnd(i+1.),u.x),u.y);}
float fbm(vec2 p){float t=.0,a=1.;for(int i=0;i<5;i++){t+=a*noise(p);p*=mat2(1,-1.2,.2,1.2)*2.;a*=.5;}return t;}

void main(){
  vec2 uv=(FC-.5*R)/R.y;
  vec3 col=vec3(1);
  uv.x+=.25;
  uv*=vec2(2,1);

  float n=fbm(uv*.28-vec2(T*.01,0));
  n=noise(uv*3.+n*2.);

  col.r-=fbm(uv+vec2(0,T*.015)+n);
  col.g-=fbm(uv*1.003+vec2(0,T*.015)+n+.003);
  col.b-=fbm(uv*1.006+vec2(0,T*.015)+n+.006);

  col=mix(col, u_color, dot(col,vec3(.21,.71,.07)));
  col=mix(vec3(.08),col,min(time*.1,1.));
  col=clamp(col,.08,1.);
  O=vec4(col,1);
}`;

const VERTEX_SHADER = `#version 300 es
precision highp float;
in vec4 position;
void main(){gl_Position=position;}`;

function hexToRgb(hex: string): [number, number, number] | null {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : null;
}

class SmokeRenderer {
  private gl: WebGL2RenderingContext | null = null;
  private program: WebGLProgram | null = null;
  private vs: WebGLShader | null = null;
  private fs: WebGLShader | null = null;
  private buffer: WebGLBuffer | null = null;
  private uResolution: WebGLUniformLocation | null = null;
  private uTime: WebGLUniformLocation | null = null;
  private uColor: WebGLUniformLocation | null = null;
  color: [number, number, number] = [0.227, 0.267, 0.435];
  ok = false;

  constructor(private canvas: HTMLCanvasElement) {
    const gl = canvas.getContext("webgl2");
    if (!gl) return;
    this.gl = gl;

    const vs = gl.createShader(gl.VERTEX_SHADER);
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    if (!vs || !fs || !program) return;

    this.vs = vs;
    this.fs = fs;
    this.program = program;

    gl.shaderSource(vs, VERTEX_SHADER);
    gl.compileShader(vs);
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(fs);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    const buffer = gl.createBuffer();
    if (!buffer) return;
    this.buffer = buffer;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, -1, -1, 1, 1, 1, -1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    this.uResolution = gl.getUniformLocation(program, "resolution");
    this.uTime = gl.getUniformLocation(program, "time");
    this.uColor = gl.getUniformLocation(program, "u_color");
    this.ok = true;
  }

  resize() {
    const gl = this.gl;
    if (!gl) return;
    const dpr = Math.min(1.75, Math.max(1, window.devicePixelRatio || 1));
    this.canvas.width = Math.floor(window.innerWidth * dpr);
    this.canvas.height = Math.floor(window.innerHeight * dpr);
    this.canvas.style.width = window.innerWidth + "px";
    this.canvas.style.height = window.innerHeight + "px";
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  render(now: number) {
    const { gl, program, buffer, canvas } = this;
    if (!gl || !program || !buffer) return;
    gl.clearColor(0.08, 0.10, 0.18, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.uniform2f(this.uResolution, canvas.width, canvas.height);
    gl.uniform1f(this.uTime, now * 1e-3);
    gl.uniform3fv(this.uColor, this.color);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }

  dispose() {
    const { gl, program, vs, fs } = this;
    if (!gl || !program) return;
    if (vs) { gl.detachShader(program, vs); gl.deleteShader(vs); }
    if (fs) { gl.detachShader(program, fs); gl.deleteShader(fs); }
    gl.deleteProgram(program);
  }
}

const FIXED: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  display: "block",
};

function CssFallback() {
  return (
    <div
      style={{
        ...FIXED,
        background: `
          radial-gradient(ellipse 140% 80% at 20% 60%, #2d3660 0%, transparent 55%),
          radial-gradient(ellipse 100% 60% at 80% 30%, #1e2a50 0%, transparent 55%),
          radial-gradient(ellipse 80% 100% at 50% 80%, #252d45 0%, transparent 60%),
          #1B2238
        `,
      }}
    />
  );
}

export default function SmokeBackground({ smokeColor = "#3A4470" }: { smokeColor?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<SmokeRenderer | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const renderer = new SmokeRenderer(canvasRef.current);

    if (!renderer.ok) {
      setUseFallback(true);
      return;
    }
    rendererRef.current = renderer;

    const handleResize = () => renderer.resize();
    handleResize();
    window.addEventListener("resize", handleResize);

    let raf: number;
    const loop = (now: number) => {
      renderer.render(now);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(raf);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    const rgb = hexToRgb(smokeColor);
    if (rgb && rendererRef.current?.ok) rendererRef.current.color = rgb;
  }, [smokeColor]);

  if (useFallback) return <CssFallback />;

  return <canvas ref={canvasRef} style={FIXED} />;
}
