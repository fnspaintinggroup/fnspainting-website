import type { Metadata } from "next";
import { LanguageOverviewPage } from "@/components/LanguageOverviewPage";

export const metadata: Metadata = {
  title: "시드니 채스우드 페인팅 | F&S Painting 한국어 안내",
  description: "채스우드와 시드니 전역의 주택, 아파트, 스트라타 및 상업 공간 페인팅. 무료 현장 방문 견적과 서면 작업 범위를 제공합니다.",
  alternates: { canonical: "/ko", languages: { "en-AU": "/", ko: "/ko", "zh-Hans": "/zh" } },
};

export default function KoreanOverviewPage() {
  return <LanguageOverviewPage copy={{
    langLabel: "한국어 안내", eyebrow: "F&S Painting · Chatswood & Sydney",
    title: "채스우드와 시드니의 믿을 수 있는 전문 페인팅",
    intro: "주택, 아파트, 스트라타 및 상업 공간을 위한 내부·외부 도장 서비스를 제공합니다. 현장을 확인한 뒤 작업 범위와 제품을 서면 견적으로 명확히 안내합니다.",
    quoteLabel: "무료 견적 요청", callLabel: "전화",
    servicesTitle: "주요 페인팅 서비스", servicesIntro: "작업 상태와 필요한 준비 과정을 확인하고 공간에 맞는 도장 방법을 제안합니다.",
    services: [
      { title: "주택 내부 도장", text: "벽, 천장, 문과 몰딩을 깔끔하게 준비하고 도장합니다.", icon: "home" },
      { title: "외부 도장", text: "외벽, 처마, 목재와 울타리 등 외부 표면을 상태에 맞게 준비합니다.", icon: "brush" },
      { title: "스트라타·상업 도장", text: "공용 공간, 사무실, 상가와 관리 도장 작업을 계획합니다.", icon: "building" },
    ],
    whyTitle: "F&S Painting을 선택하는 이유", reasons: ["라이선스와 보험을 갖춘 시드니 페인팅 업체", "20년 이상의 현장 경험과 꼼꼼한 준비 작업", "무료 현장 방문과 항목별 서면 견적", "채스우드, 노스쇼어 및 시드니 지역 서비스"],
    warrantyTitle: "서면 시공 워런티", warrantyText: "조건에 맞는 내부 재도장에는 최대 5년의 시공 워런티를 제공합니다. 외부와 마모가 큰 표면은 현장 상태를 평가해 정확한 보증 범위를 견적서에 기재합니다.", warrantyLink: "영문 워런티 안내 보기",
    contactTitle: "현장 확인부터 시작하세요", contactText: "프로젝트 위치와 작업 내용을 보내주시면 방문 가능한 시간을 확인해 드립니다. 견적서와 계약 문서는 영어로 제공됩니다.", formLabel: "영문 견적 양식 열기",
  }} />;
}
