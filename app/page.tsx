"use client";

import { useEffect, useState } from "react";

type Lang = "en" | "zh";

const copy = {
  en: {
    nav: ["Why", "Workbench", "Journey", "Community"],
    navIds: ["why", "workbench", "journey", "community"],
    open: "Open the overview",
    eyebrow: "AIPOCH / OPEN SCIENCE",
    hero: ["Build Science", "in the Open."],
    intro:
      "An open-source, model-agnostic workbench for real research. Bring the question, the evidence and the expertise into one continuous, inspectable workspace.",
    explore: "Explore the workbench",
    github: "Build with us on GitHub",
    signal: "OPEN BY DESIGN · BUILT WITH THE RESEARCH COMMUNITY",
    whyKicker: "01 / THE RESEARCH GAP",
    whyTitle: "A better model won’t fix a broken research workflow.",
    whyBody:
      "The hard part is keeping evidence, methods, tools, compute and outputs connected. Research should move forward—not reset at every tool boundary.",
    gaps: [
      ["Question", "Intent", "Goals get restated in every tool"],
      ["Evidence", "Sources", "Papers and data live across systems"],
      ["Method", "Design", "Expert practice is rarely executable"],
      ["Analysis", "Execution", "Environments are hard to reproduce"],
      ["Validation", "Checks", "Methods and outputs drift apart"],
      ["Outputs", "Artifacts", "Files lose context and provenance"],
    ],
    workKicker: "02 / ONE RESEARCH WORKBENCH",
    workTitle: "Start with a question. Get straight to the work.",
    workBody:
      "Open Science is the working environment around the model: your project, specialist methods, tools, execution and research record—kept together from first question to final artifact.",
    values: [
      ["Open source", "Code you can inspect"],
      ["Model-agnostic", "Choose what fits"],
      ["Transparent", "See each step"],
      ["Reproducible", "Keep context & records"],
    ],
    continuum: ["Ask", "Assemble", "Run", "Review"],
    journeyKicker: "03 / A RESEARCHER’S JOURNEY",
    journeyTitle: "One research question. Six connected systems.",
    journeyBody:
      "Follow a paper-reproduction task from project setup to a result you can inspect. Every step remains tied to the same question and source material.",
    taskLabel: "EXAMPLE TASK",
    task:
      "I have the paper and the data. I want to reproduce the main result.",
    steps: [
      {
        title: "Set up the project",
        cap: "Persistent context",
        heading: "Define the target before you begin.",
        body: "Create a project, specify the result to reproduce, and add the paper and data. Every session can use the same context.",
        result: "A project anchored in the question and source material",
        image: "/assets/product-project.png",
      },
      {
        title: "Load expertise",
        cap: "Specialists & Skills",
        heading: "Bring the right expertise into the project.",
        body: "Load specialist context, scientific Skills, tools and data connections matched to the study.",
        result: "A study-specific set of scientific capabilities",
        image: "/assets/product-skills.png",
      },
      {
        title: "Choose your stack",
        cap: "Models · runtime",
        heading: "Choose how and where the work runs.",
        body: "Select models, agents, Python or R environments, and local or remote compute—then change them as the work evolves.",
        result: "A technical stack matched to the study",
        image: "/assets/product-project.png",
      },
      {
        title: "Approve the plan",
        cap: "Orchestration",
        heading: "Approve the plan before anything runs.",
        body: "Review goals, steps, boundaries and permissions. The agent coordinates the work while progress stays visible.",
        result: "A structured, researcher-approved execution plan",
        image: "/assets/product-plan.png",
      },
      {
        title: "Inspect outputs",
        cap: "Data & artifacts",
        heading: "Inspect every output as soon as it lands.",
        body: "Open figures, tables and notebooks inside the project. Compare outputs with the source material in split view.",
        result: "Research artifacts ready to inspect and share",
        image: "/assets/product-artifacts.png",
      },
      {
        title: "Review & reproduce",
        cap: "Reviewer & provenance",
        heading: "When the result differs, trace it back.",
        body: "Compare the result with the paper, inspect code, parameters and provenance, then rerun only what needs to change.",
        result: "A documented account of matches and discrepancies",
        image: "/assets/product-reviewer.jpg",
      },
    ],
    stackKicker: "04 / YOUR RESEARCH, YOUR STACK",
    stackTitle: "Build the stack around the research.",
    stackBody:
      "The research goal stays stable. The technical choices can change with every task.",
    stack: [
      ["01", "Agent", "Codex, Claude Code, OpenCode or another execution framework."],
      ["02", "Model", "Connect multiple providers, gateways or local models."],
      ["03", "Runtime", "Use persistent Python, R and REPL environments."],
      ["04", "Compute", "Run locally or connect a remote SSH host."],
      ["05", "Data", "Use project files, research Connectors and MCP servers."],
    ],
    skillKicker: "05 / SPECIALISTS & SKILLS",
    skillTitle: "Load the expertise your research needs.",
    skillBody:
      "Specialists provide domain context. Skills package methods that can be called, combined, inspected and shared across disciplines.",
    skillTags: [
      "Life science",
      "Medicine",
      "Chemistry",
      "Physics",
      "Astronomy",
      "Environment",
      "Engineering",
      "Data science",
    ],
    skillCta: "Explore scientific capabilities",
    trustKicker: "06 / DATA, ARTIFACTS & TRUST",
    trustTitle: "Keep every file together. Trace every result back.",
    trustBody:
      "Source material, execution records and final artifacts stay linked inside the project.",
    trust: [
      ["Materials", "Project files, uploads, and @ / # references."],
      ["Artifacts", "Preview datasets, notebooks, figures and reports."],
      ["Provenance", "Trace output back to code, tools and run records."],
      ["Control", "Set approvals and permission modes for every session."],
    ],
    communityKicker: "07 / THE OPEN RESEARCH COMMONS",
    communityTitle: "One workbench. A shared space for open research.",
    communityBody:
      "Researchers use capabilities. Domain experts package methods. Developers connect tools and data. Institutions validate, reproduce and collaborate.",
    roles: ["Researchers", "Domain experts", "Developers", "Institutions"],
    loop: ["Use", "Ask", "Review", "Share", "Improve"],
    closeEyebrow: "AIPOCH / OPEN SCIENCE",
    closeTitle: "Put research expertise to work. On your terms.",
    closeBody:
      "Open research compounds: each reusable capability gives the next project a stronger starting point.",
    overview: "Product overview",
    partner: "Partner with AIPOCH",
    footer: "Open-source research infrastructure by AIPOCH.",
  },
  zh: {
    nav: ["为什么", "工作台", "科研旅程", "开放社区"],
    navIds: ["why", "workbench", "journey", "community"],
    open: "查看完整介绍",
    eyebrow: "AIPOCH / OPEN SCIENCE",
    hero: ["在开放中", "构建科学。"],
    intro:
      "面向真实科研的开源、模型自由工作台。让问题、证据与专业知识进入同一个连续、透明、可检查的研究空间。",
    explore: "探索科研工作台",
    github: "在 GitHub 与我们共建",
    signal: "以开放为原则 · 与全球科研社区共同构建",
    whyKicker: "01 / 科研断层",
    whyTitle: "更强的模型，修复不了破碎的科研工作流。",
    whyBody:
      "真正困难的，是让证据、方法、工具、算力和产出始终保持连接。科研应该持续向前，而不是在每个工具边界重新开始。",
    gaps: [
      ["问题", "研究意图", "目标在不同工具间被反复重述"],
      ["证据", "资料来源", "论文和数据散落在多个系统"],
      ["方法", "研究设计", "专家经验难以直接执行"],
      ["分析", "真实执行", "代码和环境难以复现"],
      ["验证", "检查机制", "方法与结果逐渐脱节"],
      ["产出", "研究资产", "文件失去上下文与溯源"],
    ],
    workKicker: "02 / 一个科研工作台",
    workTitle: "从一个问题开始，直接进入科研。",
    workBody:
      "Open Science 是模型之外的完整工作环境：项目、专业方法、工具、执行与研究记录，从第一个问题到最终成果始终在一起。",
    values: [
      ["开源", "代码可检查"],
      ["模型自由", "选择适合研究的方案"],
      ["过程透明", "看见每一步"],
      ["可复现", "保留上下文与记录"],
    ],
    continuum: ["提问", "组装", "执行", "审阅"],
    journeyKicker: "03 / 研究者旅程",
    journeyTitle: "一个科研问题，六个相互连接的系统。",
    journeyBody:
      "沿着一项论文复现任务，从项目设置走到可以检查的结果。每一步都与同一个问题和源材料相连。",
    taskLabel: "示例任务",
    task: "我有论文和数据，希望复现其中的核心结果。",
    steps: [
      {
        title: "建立项目",
        cap: "持久上下文",
        heading: "开始之前，先定义目标。",
        body: "创建项目、说明需要复现的结果，并加入论文和数据。之后的每个会话都能使用同一上下文。",
        result: "一个以问题和源材料为锚点的研究项目",
        image: "/assets/product-project.png",
      },
      {
        title: "载入专业能力",
        cap: "专家与 Skills",
        heading: "把正确的专业能力带进项目。",
        body: "载入与研究匹配的专家上下文、科学 Skills、工具和数据连接。",
        result: "一套适配研究任务的科学能力",
        image: "/assets/product-skills.png",
      },
      {
        title: "选择技术栈",
        cap: "模型 · 运行时",
        heading: "选择工作如何运行、在哪里运行。",
        body: "选择模型、Agent、Python 或 R 环境，以及本地或远程算力，并可随研究进展调整。",
        result: "一套与研究匹配的技术栈",
        image: "/assets/product-project.png",
      },
      {
        title: "批准计划",
        cap: "编排与权限",
        heading: "执行之前，先批准计划。",
        body: "检查目标、步骤、边界和权限。Agent 负责协调工作，而进展始终可见。",
        result: "一份由研究者确认的结构化执行计划",
        image: "/assets/product-plan.png",
      },
      {
        title: "检查产出",
        cap: "数据与资产",
        heading: "每一份产出生成后都能立即检查。",
        body: "在项目中打开图表、表格和 Notebook，并在分屏中与源材料直接比对。",
        result: "可检查、可分享的研究资产",
        image: "/assets/product-artifacts.png",
      },
      {
        title: "审阅与复现",
        cap: "Reviewer 与溯源",
        heading: "当结果不一致时，追溯它。",
        body: "将结果与论文对照，检查代码、参数与来源记录，只重新运行需要改变的部分。",
        result: "关于一致与差异的完整记录",
        image: "/assets/product-reviewer.jpg",
      },
    ],
    stackKicker: "04 / 你的研究，你的技术栈",
    stackTitle: "让技术栈围绕研究来构建。",
    stackBody: "研究目标保持稳定，技术选择可以随每一项任务改变。",
    stack: [
      ["01", "Agent", "使用 Codex、Claude Code、OpenCode 或其他执行框架。"],
      ["02", "模型", "连接多个模型提供商、网关或本地模型。"],
      ["03", "运行时", "使用持久化的 Python、R 和 REPL 环境。"],
      ["04", "算力", "在本地运行，或连接远程 SSH 主机。"],
      ["05", "数据", "使用项目文件、科研 Connectors 与 MCP 服务。"],
    ],
    skillKicker: "05 / 专家与 SKILLS",
    skillTitle: "载入你的研究真正需要的专业能力。",
    skillBody:
      "Specialists 提供领域上下文，Skills 将科研方法封装为可调用、可组合、可检查、可共享的能力。",
    skillTags: [
      "生命科学",
      "医学",
      "化学",
      "物理",
      "天文学",
      "环境科学",
      "工程",
      "数据科学",
    ],
    skillCta: "探索科学能力",
    trustKicker: "06 / 数据、资产与信任",
    trustTitle: "把每个文件放在一起，让每个结果都能追溯。",
    trustBody: "源材料、执行记录与最终资产始终在项目中保持连接。",
    trust: [
      ["材料", "项目文件、上传内容，以及 @ / # 引用。"],
      ["研究资产", "预览数据集、Notebook、图表和报告。"],
      ["溯源", "从产出回到代码、工具调用与运行记录。"],
      ["控制", "为每个会话设置批准流程与权限模式。"],
    ],
    communityKicker: "07 / 开放科研共同体",
    communityTitle: "一个工作台，一片开放科研的共享空间。",
    communityBody:
      "研究者使用能力，领域专家封装方法，开发者连接工具与数据，科研机构参与验证、复现和协作。",
    roles: ["研究者", "领域专家", "开发者", "科研机构"],
    loop: ["使用", "提问", "审阅", "分享", "改进"],
    closeEyebrow: "AIPOCH / OPEN SCIENCE",
    closeTitle: "让科研专业能力真正工作起来。按你的方式。",
    closeBody:
      "开放科研会产生复利：每一项可复用的能力，都让下一个项目拥有更强的起点。",
    overview: "查看产品介绍",
    partner: "与 AIPOCH 合作",
    footer: "AIPOCH 构建的开源科研基础设施。",
  },
} as const;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const c = copy[lang];
  const step = c.steps[activeStep];

  useEffect(() => {
    const syncProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? window.scrollY / max : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
    };
    syncProgress();
    window.addEventListener("scroll", syncProgress, { passive: true });
    window.addEventListener("resize", syncProgress);
    return () => {
      window.removeEventListener("scroll", syncProgress);
      window.removeEventListener("resize", syncProgress);
    };
  }, []);

  return (
    <main className={lang === "zh" ? "lang-zh" : ""}>
      <div className="scroll-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="AIPOCH Open Science home">
          <img src="/assets/aipoch-mark.png" alt="AIPOCH" />
          <span className="brand-divider" />
          <span>OPEN SCIENCE</span>
        </a>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          {c.nav.map((item, index) => (
            <a key={item} href={`#${c.navIds[index]}`} onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label="Language">
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>
              EN
            </button>
            <button className={lang === "zh" ? "active" : ""} onClick={() => setLang("zh")} aria-pressed={lang === "zh"}>
              中文
            </button>
          </div>
          <a className="header-cta" href="https://aipoch.com/open-science/overview?lang=en" target="_blank" rel="noreferrer">
            {c.open} <span aria-hidden="true">↗</span>
          </a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span />
            <span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy reveal-in">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1>
            <span>{c.hero[0]}</span>
            <span className="highlight-line">{c.hero[1]}</span>
          </h1>
          <p className="hero-intro">{c.intro}</p>
          <div className="hero-actions">
            <a className="button primary" href="#workbench">{c.explore} <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="https://github.com/aipoch/open-science" target="_blank" rel="noreferrer">{c.github} <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-art reveal-in" aria-hidden="true">
          <img src="/assets/open-science-city.png" alt="" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>
        <div className="hero-signal"><span className="signal-dot" />{c.signal}</div>
        <a href="#why" className="scroll-cue" aria-label="Scroll to the research gap"><span>SCROLL</span><i /></a>
      </section>

      <section className="section section-light gap-section" id="why">
        <div className="section-head two-col">
          <p className="kicker">{c.whyKicker}</p>
          <div>
            <h2>{c.whyTitle}</h2>
            <p className="section-intro">{c.whyBody}</p>
          </div>
        </div>
        <div className="gap-track">
          {c.gaps.map((gap, index) => (
            <article className="gap-item" key={gap[0]}>
              <div className="gap-node"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <p className="micro">{gap[1]}</p>
              <h3>{gap[0]}</h3>
              <p>{gap[2]}</p>
            </article>
          ))}
        </div>
        <div className="lost-line">
          <span>WHAT GETS LOST</span>
          <div />
          <strong>CONTEXT · CONTINUITY · EXECUTION STATE · PROVENANCE</strong>
        </div>
      </section>

      <section className="section workbench-section" id="workbench">
        <div className="workbench-copy">
          <p className="kicker">{c.workKicker}</p>
          <h2>{c.workTitle}</h2>
          <p className="section-intro">{c.workBody}</p>
          <div className="values-grid">
            {c.values.map((value) => (
              <div className="value" key={value[0]}>
                <strong>{value[0]}</strong>
                <span>{value[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="product-stage">
          <div className="product-window main-window">
            <div className="window-bar"><span/><span/><span/><b>OPEN SCIENCE / PROJECT</b></div>
            <img src="/assets/product-project.png" alt="Open Science project workspace" />
          </div>
          <div className="product-window floating-window">
            <img src="/assets/product-plan.png" alt="Open Science research plan" />
          </div>
          <span className="stage-label">A SHARED, PERSISTENT RESEARCH SPACE</span>
        </div>
        <div className="continuum" aria-label="Open Science workflow">
          {c.continuum.map((item, index) => (
            <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < c.continuum.length - 1 && <i>→</i>}</div>
          ))}
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="section-head two-col">
          <p className="kicker">{c.journeyKicker}</p>
          <div>
            <h2>{c.journeyTitle}</h2>
            <p className="section-intro">{c.journeyBody}</p>
          </div>
        </div>
        <div className="task-strip"><span>{c.taskLabel}</span><p>{c.task}</p></div>
        <div className="journey-tabs" role="tablist" aria-label="Research journey steps">
          {c.steps.map((item, index) => (
            <button
              key={item.title}
              role="tab"
              aria-selected={activeStep === index}
              aria-controls="journey-panel"
              onClick={() => setActiveStep(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <small>{item.cap}</small>
            </button>
          ))}
        </div>
        <div className="journey-panel" id="journey-panel" role="tabpanel">
          <div className="journey-copy">
            <p className="micro">USER JOURNEY · {String(activeStep + 1).padStart(2, "0")} / 06</p>
            <h3>{step.heading}</h3>
            <p>{step.body}</p>
            <div className="result-line"><span>OUTPUT</span><strong>{step.result}</strong></div>
            <div className="journey-controls">
              <button onClick={() => setActiveStep((activeStep + 5) % 6)} aria-label="Previous step">←</button>
              <span>{activeStep + 1} / 6</span>
              <button onClick={() => setActiveStep((activeStep + 1) % 6)} aria-label="Next step">→</button>
            </div>
          </div>
          <div className="journey-image" key={`${lang}-${activeStep}`}>
            <img src={step.image} alt={step.title} />
          </div>
        </div>
      </section>

      <section className="section stack-section">
        <div className="stack-lead">
          <p className="kicker">{c.stackKicker}</p>
          <h2>{c.stackTitle}</h2>
          <p className="section-intro">{c.stackBody}</p>
          <div className="stack-equation" aria-hidden="true">
            <span>MODEL</span><i>+</i><span>AGENT</span><i>+</i><span>RUNTIME</span><i>+</i><span>DATA</span>
          </div>
        </div>
        <div className="stack-list">
          {c.stack.map((item) => (
            <article key={item[0]}>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <div className="skills-noise" aria-hidden="true" />
        <div className="skills-copy">
          <p className="kicker">{c.skillKicker}</p>
          <h2>{c.skillTitle}</h2>
          <p className="section-intro">{c.skillBody}</p>
          <div className="skill-tags">
            {c.skillTags.map((tag, index) => <span key={tag}><i>{String(index + 1).padStart(2, "0")}</i>{tag}</span>)}
          </div>
          <a className="button yellow" href="https://aipoch.com/open-science/overview?lang=en#slide-09" target="_blank" rel="noreferrer">{c.skillCta} <span>↗</span></a>
        </div>
        <div className="skills-visual">
          <div className="yellow-orbit" aria-hidden="true" />
          <div className="product-window dark-window">
            <div className="window-bar"><span/><span/><span/><b>SKILLS / MARKETPLACE</b></div>
            <img src="/assets/product-skills.png" alt="Open Science skills marketplace" />
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="section-head two-col">
          <p className="kicker">{c.trustKicker}</p>
          <div>
            <h2>{c.trustTitle}</h2>
            <p className="section-intro">{c.trustBody}</p>
          </div>
        </div>
        <div className="trust-layout">
          <div className="trust-list">
            {c.trust.map((item, index) => (
              <article key={item[0]}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item[0]}</h3><p>{item[1]}</p></div>
              </article>
            ))}
          </div>
          <div className="artifact-collage">
            <figure className="artifact-main"><img src="/assets/product-artifacts.png" alt="Research artifacts in split view" /></figure>
            <figure className="artifact-review"><img src="/assets/product-reviewer.jpg" alt="Open Science reviewer interface" /></figure>
            <span className="collage-note">MATERIAL → EXECUTION → ARTIFACT → CLAIM</span>
          </div>
        </div>
      </section>

      <section className="community-section" id="community">
        <div className="community-copy">
          <p className="kicker">{c.communityKicker}</p>
          <h2>{c.communityTitle}</h2>
          <p className="section-intro">{c.communityBody}</p>
        </div>
        <div className="community-art">
          <img src="/assets/open-science-city.png" alt="A conceptual open research commons" />
          <div className="role-label role-one"><span>01</span>{c.roles[0]}</div>
          <div className="role-label role-two"><span>02</span>{c.roles[1]}</div>
          <div className="role-label role-three"><span>03</span>{c.roles[2]}</div>
          <div className="role-label role-four"><span>04</span>{c.roles[3]}</div>
        </div>
        <div className="community-loop">
          <span>CONTRIBUTION LOOP</span>
          <div>{c.loop.map((item, index) => <b key={item}>{item}{index < c.loop.length - 1 && <i>↔</i>}</b>)}</div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-grid" aria-hidden="true" />
        <p className="eyebrow">{c.closeEyebrow}</p>
        <h2>Build Science<br/><span>in the Open.</span></h2>
        <p className="closing-localized">{c.closeTitle}</p>
        <p className="closing-body">{c.closeBody}</p>
        <div className="closing-actions">
          <a href="https://aipoch.com/open-science/overview?lang=en" target="_blank" rel="noreferrer"><span>01</span>{c.overview}<i>↗</i></a>
          <a href="https://github.com/aipoch/open-science" target="_blank" rel="noreferrer"><span>02</span>GitHub<i>↗</i></a>
          <a href="https://aipoch.com/contact-us" target="_blank" rel="noreferrer"><span>03</span>{c.partner}<i>↗</i></a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand"><img src="/assets/aipoch-mark.png" alt="AIPOCH" /><span className="brand-divider"/><span>OPEN SCIENCE</span></div>
        <p>{c.footer}</p>
        <div><span>© 2026 AIPOCH</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
