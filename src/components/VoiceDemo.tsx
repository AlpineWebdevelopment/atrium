"use client";
import { useState } from "react";
import { ConversationProvider, useConversation } from "@elevenlabs/react";

type Status = "idle" | "connecting" | "active" | "error";

function VoiceDemoInner() {
  const [status, setStatus] = useState<Status>("idle");
  const conversation = useConversation({
    onConnect: () => setStatus("active"),
    onDisconnect: () => setStatus("idle"),
    onError: () => setStatus("error"),
  });

  const agentTalking = status === "active" && conversation.isSpeaking;

  async function startCall() {
    setStatus("connecting");
    try {
      // The browser must grant mic access before the session opens.
      await navigator.mediaDevices.getUserMedia({ audio: true });

      const res = await fetch("/api/elevenlabs");
      const { signedUrl, error } = await res.json();
      if (error || !signedUrl) throw new Error(error);

      await conversation.startSession({ signedUrl });
    } catch {
      setStatus("error");
    }
  }

  function stopCall() {
    conversation.endSession();
    setStatus("idle");
  }

  return (
    <section className="vdemo">
      <div className="wrap">
        <div className="vdemo__inner reveal">
          <div className="vdemo__copy">
            <span className="dash__eyebrow">Élő bemutató</span>
            <h2 className="vdemo__h">Próbálja ki a rendszert most — élőben.</h2>
            <p className="vdemo__p">
              Nyomja meg a gombot, és pár másodpercen belül az Atrium AI
              asszisztense felveszi a hívást — magyarul, ahogy az Ön ügyfelei
              hallanák.
            </p>
          </div>

          <div className="vdemo__widget">
            <div
              className={
                "vdemo__orb" +
                (agentTalking ? " vdemo__orb--talking" : "") +
                (status === "active" ? " vdemo__orb--active" : "")
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 2h6v12H9z" />
                <path d="M5 10a7 7 0 0 0 14 0M12 19v3" />
              </svg>
            </div>

            {status === "idle" && (
              <button className="btn btn--lg vdemo__btn" onClick={startCall}>
                Próbálja ki élőben
              </button>
            )}
            {status === "connecting" && (
              <button className="btn btn--lg vdemo__btn vdemo__btn--loading" disabled>
                Csatlakozás…
              </button>
            )}
            {status === "active" && (
              <>
                <p className="vdemo__live-label">
                  {agentTalking ? "Atrium asszisztens beszél…" : "Hallgatja Önt…"}
                </p>
                <button className="btn btn--ghost vdemo__btn" onClick={stopCall}>
                  Hívás befejezése
                </button>
              </>
            )}
            {status === "error" && (
              <>
                <p className="vdemo__err">Hiba — engedélyezze a mikrofont, és próbálja újra.</p>
                <button className="btn vdemo__btn" onClick={() => setStatus("idle")}>
                  Újra
                </button>
              </>
            )}

            <span className="vdemo__note">Magyar nyelvű · kb. 2 perc · ingyenes</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VoiceDemo() {
  return (
    <ConversationProvider>
      <VoiceDemoInner />
    </ConversationProvider>
  );
}
