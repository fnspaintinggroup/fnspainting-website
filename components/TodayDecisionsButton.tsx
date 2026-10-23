"use client";

import { useState } from "react";
import { Check, ClipboardCheck, Copy, ExternalLink } from "lucide-react";

const request =
  "연결된 내 컴퓨터의 F&S PaintingGroup with Codex 폴더에서 모바일_요약.md와 필요한 최신 근거를 읽고 오늘 내가 결정할 일을 확인해줘. 마지막 확인시각과 미확인 항목을 구분하고, 우선순위·내가 할 일·기한을 간단히 정리해줘. 파일에 접근할 수 없으면 내용을 추정하지 말고 연결 상태를 알려줘. 발송·게시·결제는 하지 마.";

export default function TodayDecisionsButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);



  async function prepareRequest() {
    setOpen(true);
    try {
      await navigator.clipboard.writeText(request);
      setCopied(true);

    } catch {
      setCopied(false);

    }
  }

  return (
    <div className="mt-6 rounded-xl border border-eucalyptus/25 bg-mist p-4">
      <button
        type="button"
        onClick={prepareRequest}
        aria-expanded={open}
        aria-controls="today-decisions-handoff"
        className="flex min-h-24 w-full items-center gap-4 rounded-xl bg-ink px-5 py-4 text-left text-white shadow-sm transition hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-eucalyptus/25"
      >
        <ClipboardCheck className="h-8 w-8 shrink-0" aria-hidden="true" />
        <span>
          <strong className="block text-lg">오늘 결정할 일 확인</strong>
          <span className="mt-1 block text-sm text-white/80">
            Caleb · Codex 확인 요청문 복사
          </span>
        </span>
      </button>
      <p className="mt-3 text-sm leading-6 text-ink/65">
        요청문을 복사해 연결된 PC의 Codex 창에서 실행하세요.
        내부 업무 요약은 이 웹페이지에 표시되지 않습니다.
      </p>

      {open && (
        <div id="today-decisions-handoff" className="mt-4 border-t border-ink/10 pt-4">
          <p role="status" aria-live="polite" className="flex items-center gap-2 text-sm font-semibold text-eucalyptus">
            {copied && <Check className="h-4 w-4" aria-hidden="true" />}
            {copied ? "요청문을 복사했습니다." : "아래 요청문을 선택해 복사해 주세요."}
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm leading-6 text-ink/75">
            <li>ChatGPT 앱의 Remote에서 연결된 컴퓨터를 선택하세요.</li>
            <li>기존 F&amp;S 총괄 업무창에 붙여넣고 보내세요.</li>
          </ol>
          <p className="mt-2 text-xs leading-5 text-ink/60">
            PC가 켜져 있고 인터넷·계정 연결이 유지돼야 합니다.
            이 버튼이 요청을 자동 발송하거나 PC 파일을 직접 읽지는 않습니다.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <a
              href="https://chatgpt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-eucalyptus px-4 py-2 text-sm font-semibold text-white focus:outline-none focus:ring-4 focus:ring-eucalyptus/25"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              ChatGPT 열기
            </a>
            <button
              type="button"
              onClick={prepareRequest}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-eucalyptus/30 bg-white px-4 py-2 text-sm text-eucalyptus focus:outline-none focus:ring-4 focus:ring-eucalyptus/20"
            >
              <Copy className="h-4 w-4" aria-hidden="true" />
              다시 복사
            </button>
          </div>
          {(
            <div className="mt-3">
              <label htmlFor="decisions-request" className="text-xs text-ink/65">붙여넣기가 안 되면 아래 요청문을 직접 복사하세요.</label>
              <textarea
                id="decisions-request"

                readOnly
                value={request}
                rows={6}
                onFocus={(event) => event.currentTarget.select()}
                className="mt-1 w-full rounded-lg border border-ink/20 bg-white p-3 text-sm leading-6 text-ink"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
