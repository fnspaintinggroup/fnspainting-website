import type { Metadata } from "next";
import { LanguageOverviewPage } from "@/components/LanguageOverviewPage";

export const metadata: Metadata = {
  title: "悉尼 Chatswood 专业油漆服务 | F&S Painting 中文介绍",
  description: "为 Chatswood、North Shore 及悉尼地区的住宅、公寓、物业和商业空间提供室内外油漆服务及免费现场报价。",
  alternates: { canonical: "/zh", languages: { "en-AU": "/", "zh-Hans": "/zh" } },
};

export default function ChineseOverviewPage() {
  return <LanguageOverviewPage copy={{
    langLabel: "中文介绍", eyebrow: "F&S Painting · Chatswood & Sydney",
    title: "Chatswood 及悉尼地区的专业油漆服务",
    intro: "我们为住宅、公寓、物业公共区域和商业空间提供室内及室外油漆服务。现场检查后，我们会在书面报价中清楚列明施工范围和涂料系统。",
    quoteLabel: "申请免费报价", callLabel: "电话",
    servicesTitle: "主要服务", servicesIntro: "我们会先检查表面状况和所需准备工作，再建议合适的施工方案。",
    services: [
      { title: "住宅室内油漆", text: "墙面、天花板、门和木线的表面处理及油漆翻新。", icon: "home" },
      { title: "住宅室外油漆", text: "外墙、屋檐、木材和围栏等室外表面的处理和涂装。", icon: "brush" },
      { title: "物业与商业油漆", text: "公寓公共区域、办公室、商铺及维护油漆工程。", icon: "building" },
    ],
    whyTitle: "选择 F&S Painting", reasons: ["持牌并投保的悉尼油漆公司", "超过 20 年的现场经验和细致准备", "免费现场检查及分项书面报价", "服务 Chatswood、North Shore 及悉尼地区"],
    warrantyTitle: "书面施工保修", warrantyText: "符合条件的室内翻新油漆可享最长 5 年施工保修。室外及高磨损表面会单独评估，并在书面报价中确认具体保修范围。", warrantyLink: "查看英文保修说明",
    contactTitle: "预约现场报价", contactText: "请提供工程地址和施工内容，我们会确认可上门检查的时间。正式报价和合同文件以英文提供。", formLabel: "打开英文报价表",
  }} />;
}
