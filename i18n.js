// i18n translations
const translations = {
    'zh-CN': {
        // Navigation
        'nav.features': '核心功能',
        'nav.benchmark': '性能基准',
        'nav.how-it-works': '工作原理',
        'nav.get-started': '快速开始',
        'nav.github': 'GitHub',
        
        // Hero
        'hero.title1': 'AI 原生的记忆框架',
        'hero.title2': '让你的 AI 应用拥有智能记忆',
        'hero.subtitle': 'Cortex Memory 是一个完整的、生产就绪的记忆管理框架，自动提取、组织和优化信息。',
        'hero.cta.start': '快速开始',
        'hero.cta.github': '查看 GitHub ⭐',
        'hero.stats.recall': 'Recall@1',
        'hero.stats.vs': 'vs LangMem',
        'hero.stats.rust': '高性能核心',
        
        // Comparison
        'comparison.title': '为什么需要 Cortex Memory?',
        'comparison.before.title': '没有记忆的 AI',
        'comparison.before.item1': '每次对话后忘记用户信息',
        'comparison.before.item2': '缺乏个性化和上下文理解',
        'comparison.before.item3': '重复询问相同问题',
        'comparison.before.item4': '仅限于短期对话历史',
        'comparison.before.item5': '机械、缺乏人性化',
        'comparison.after.title': '拥有 Cortex Memory 的 AI',
        'comparison.after.item1': '记住用户偏好和历史互动',
        'comparison.after.item2': '提供深度个性化体验',
        'comparison.after.item3': '持续学习和适应',
        'comparison.after.item4': '跨多次对话保持上下文',
        'comparison.after.item5': '建立信任感,像真正的助手',
        
        // Features
        'features.title': '核心功能',
        'features.subtitle': '为构建智能 AI 应用而生',
        'features.extraction.title': '智能事实提取',
        'features.extraction.desc': '使用 LLM 自动从非结构化文本中提取关键事实和洞察',
        'features.search.title': '语义向量搜索',
        'features.search.desc': '基于高性能向量相似度搜索,快速检索最相关的记忆',
        'features.optimization.title': '自动记忆优化',
        'features.optimization.desc': '定期审查、合并和精炼记忆,提高相关性并降低成本',
        'features.multimodal.title': '多模式访问',
        'features.multimodal.desc': '通过 REST API、CLI 或直接库调用与记忆系统交互',
        'features.integration.title': 'Agent 框架集成',
        'features.integration.desc': '提供工具和适配器,轻松集成到流行的 AI Agent 框架',
        'features.dashboard.title': 'Web 仪表板',
        'features.dashboard.desc': '专用的 Web UI 用于监控、分析和可视化 Agent 的记忆',
        
        // Benchmark
        'benchmark.title': '性能基准测试',
        'benchmark.subtitle': '基于 LOCOMO 数据集的严格评估',
        'benchmark.desc': 'Cortex Memory 在 LOCOMO 数据集上显著优于 LangMem',
        'benchmark.recall1': 'Recall@1 提升 67.02pp',
        'benchmark.mrr': 'MRR 提升 54.90pp',
        'benchmark.ndcg': 'NDCG@10 提升 62.58pp',
        
        // How It Works
        'workflow.title': '工作原理',
        'workflow.subtitle': '完整的记忆生命周期管理',
        'workflow.step1.title': '记忆添加',
        'workflow.step1.desc': '应用通过 API/CLI/MCP 提交文本,系统使用 LLM 提取关键事实',
        'workflow.step2.title': '向量存储',
        'workflow.step2.desc': '生成语义向量并存储到 Qdrant,支持高效的相似度搜索',
        'workflow.step3.title': '智能搜索',
        'workflow.step3.desc': '通过自然语言查询,快速检索最相关的记忆',
        'workflow.step4.title': '自动优化',
        'workflow.step4.desc': '定期去重、合并和清理记忆,保持知识库高质量',
        
        // Screenshots
        'screenshots.title': '可视化仪表板',
        'screenshots.subtitle': '实时监控、分析和管理 AI 的记忆',
        'screenshots.dashboard': '交互式仪表板 - 实时了解记忆使用情况、系统健康和活动统计',
        'screenshots.memories.title': '记忆管理',
        'screenshots.memories.desc': '查看和管理单个记忆记录,支持搜索、过滤和编辑',
        'screenshots.optimization.title': '记忆优化',
        'screenshots.optimization.desc': '分析和优化记忆质量,自动去重和合并相似内容',
        'screenshots.monitor.title': '性能监控',
        'screenshots.monitor.desc': '监控记忆性能和活动,实时查看系统运行状态',
        'screenshots.analytics.title': '数据分析',
        'screenshots.analytics.desc': '详细洞察和趋势分析,了解记忆随时间的演变',
        
        // Ecosystem
        'ecosystem.title': '完整的生态系统',
        'ecosystem.subtitle': '模块化设计,灵活集成',
        'ecosystem.core.badge': '核心引擎',
        'ecosystem.core.desc': '包含所有记忆管理业务逻辑,包括提取、优化和搜索',
        'ecosystem.core.tag1': '事实提取',
        'ecosystem.core.tag2': '语义搜索',
        'ecosystem.core.tag3': '自动优化',
        'ecosystem.service.badge': 'REST API',
        'ecosystem.service.desc': '高性能 REST API,可被任何编程语言或系统访问',
        'ecosystem.service.tag1': '跨语言',
        'ecosystem.service.tag2': 'RESTful',
        'ecosystem.service.tag3': '高并发',
        'ecosystem.cli.badge': '命令行工具',
        'ecosystem.cli.desc': '开发者和管理员直接与记忆存储交互的命令行工具',
        'ecosystem.cli.tag1': '便捷管理',
        'ecosystem.cli.tag2': '批量操作',
        'ecosystem.cli.tag3': '脚本友好',
        'ecosystem.insights.badge': 'Web 仪表板',
        'ecosystem.insights.desc': '提供记忆分析和可视化的 Web 管理工具',
        'ecosystem.insights.tag1': '实时监控',
        'ecosystem.insights.tag2': '数据分析',
        'ecosystem.insights.tag3': '可视化',
        'ecosystem.mcp.badge': 'MCP 适配器',
        'ecosystem.mcp.desc': '将 Cortex Memory 集成为 AI Agent 框架工具的适配器',
        'ecosystem.mcp.tag1': 'MCP 协议',
        'ecosystem.mcp.tag2': '插件化',
        'ecosystem.mcp.tag3': '易集成',
        'ecosystem.rig.badge': 'Rig 集成',
        'ecosystem.rig.desc': '专门的 Rig 框架集成,用于自主 LLM Agent',
        'ecosystem.rig.tag1': 'Rig 原生',
        'ecosystem.rig.tag2': 'Agent 优化',
        'ecosystem.rig.tag3': '开箱即用',
        
        // Use Cases
        'usecases.title': '应用场景',
        'usecases.chatbot.title': '智能客服机器人',
        'usecases.chatbot.desc': '记住用户历史对话和偏好,提供个性化服务体验',
        'usecases.assistant.title': '个人 AI 助手',
        'usecases.assistant.desc': '长期学习用户习惯,成为真正的"第二大脑"伴侣',
        'usecases.agent.title': '自主 AI Agent',
        'usecases.agent.desc': '为 AI Agent 提供持久记忆骨架,支持复杂任务执行',
        'usecases.learning.title': '学习陪伴系统',
        'usecases.learning.desc': '跟踪学习进度和知识点,提供针对性辅导建议',
        
        // Get Started
        'getstarted.title': '快速开始',
        'getstarted.step1.title': '安装依赖',
        'getstarted.step2.title': '安装 Cortex Memory',
        'getstarted.step3.title': '配置和运行',
        'getstarted.link1.title': '完整文档',
        'getstarted.link1.desc': '查看详细的技术文档和架构说明',
        'getstarted.link2.title': '示例项目',
        'getstarted.link2.desc': '查看 Cortex TARS 等实际应用案例',
        'getstarted.link3.title': '社区支持',
        'getstarted.link3.desc': '提问、报告问题或参与讨论',
        
        // CTA
        'cta.title': '准备好让你的 AI 拥有记忆了吗?',
        'cta.subtitle': '加入开发者社区,构建真正智能的 AI 应用',
        'cta.github': '访问 GitHub',
        'cta.sponsor': '❤️ 赞助项目',
        'cta.star': '⭐ 给我们一个 Star 支持项目发展',
        
        // Footer
        'footer.tagline': 'AI 原生的记忆管理框架',
        'footer.resources': '资源',
        'footer.community': '社区',
        'footer.about': '关于',
        'footer.github': 'GitHub',
        'footer.docs': '文档',
        'footer.examples': '示例',
        'footer.issues': '问题反馈',
        'footer.discussions': '讨论区',
        'footer.sponsor': '赞助',
        'footer.license': 'MIT 开源协议',
        'footer.author': '作者',
        'footer.copyright': '© 2025 Cortex Memory. 基于 MIT 协议开源.',
        
        // Copy button
        'copy.button': '复制',
        'copy.success': '已复制!'
    },
    'en': {
        // Navigation
        'nav.features': 'Features',
        'nav.benchmark': 'Benchmark',
        'nav.how-it-works': 'How It Works',
        'nav.get-started': 'Get Started',
        'nav.github': 'GitHub',
        
        // Hero
        'hero.title1': 'AI-Native Memory',
        'hero.title2': 'Give Your AI Applications Intelligent Memory',
        'hero.subtitle': 'Cortex Memory is a complete, production-ready memory management framework that automatically extracts, organizes and optimizes information to make your AI smarter and more personalized',
        'hero.cta.start': 'Get Started',
        'hero.cta.github': 'View on GitHub ⭐',
        'hero.stats.recall': 'Recall@1',
        'hero.stats.vs': 'vs LangMem',
        'hero.stats.rust': 'High Performance',
        
        // Comparison
        'comparison.title': 'Why Cortex Memory?',
        'comparison.before.title': 'AI Without Memory',
        'comparison.before.item1': 'Forgets user details after every session',
        'comparison.before.item2': 'Lacks personalization and context',
        'comparison.before.item3': 'Repeats questions and suggestions',
        'comparison.before.item4': 'Limited to short-term conversation history',
        'comparison.before.item5': 'Feels robotic and impersonal',
        'comparison.after.title': 'AI With Cortex Memory',
        'comparison.after.item1': 'Remembers user preferences and history',
        'comparison.after.item2': 'Provides deeply personalized interactions',
        'comparison.after.item3': 'Learns and adapts over time',
        'comparison.after.item4': 'Maintains context across conversations',
        'comparison.after.item5': 'Builds rapport like a true assistant',
        
        // Features
        'features.title': 'Core Features',
        'features.subtitle': 'Built for intelligent AI applications',
        'features.extraction.title': 'Intelligent Fact Extraction',
        'features.extraction.desc': 'Automatically extracts key facts and insights from unstructured text using LLMs',
        'features.search.title': 'Semantic Vector Search',
        'features.search.desc': 'Fast retrieval of most relevant memories using high-performance vector similarity search',
        'features.optimization.title': 'Automated Memory Optimization',
        'features.optimization.desc': 'Periodically reviews, consolidates and refines memories to improve relevance and reduce cost',
        'features.multimodal.title': 'Multi-Modal Access',
        'features.multimodal.desc': 'Interact via REST API, CLI or direct library calls',
        'features.integration.title': 'Agent Framework Integration',
        'features.integration.desc': 'Tools and adapters for easy integration with popular AI agent frameworks',
        'features.dashboard.title': 'Web Dashboard',
        'features.dashboard.desc': 'Dedicated Web UI for monitoring, analyzing and visualizing agent memory',
        
        // Benchmark
        'benchmark.title': 'Performance Benchmark',
        'benchmark.subtitle': 'Rigorous evaluation on LOCOMO dataset',
        'benchmark.desc': 'Cortex Memory significantly outperforms LangMem on the LOCOMO dataset',
        'benchmark.recall1': 'Recall@1 +67.02pp',
        'benchmark.mrr': 'MRR +54.90pp',
        'benchmark.ndcg': 'NDCG@10 +62.58pp',
        
        // How It Works
        'workflow.title': 'How It Works',
        'workflow.subtitle': 'Complete memory lifecycle management',
        'workflow.step1.title': 'Add Memory',
        'workflow.step1.desc': 'Apps submit text via API/CLI/MCP, system extracts key facts using LLM',
        'workflow.step2.title': 'Vector Storage',
        'workflow.step2.desc': 'Generate semantic vectors and store in Qdrant for efficient similarity search',
        'workflow.step3.title': 'Intelligent Search',
        'workflow.step3.desc': 'Quickly retrieve most relevant memories through natural language queries',
        'workflow.step4.title': 'Auto Optimization',
        'workflow.step4.desc': 'Periodic deduplication, merging and cleanup to maintain high quality knowledge base',
        
        // Screenshots
        'screenshots.title': 'Visual Dashboard',
        'screenshots.subtitle': 'Real-time monitoring, analysis and memory management',
        'screenshots.dashboard': 'Interactive Dashboard - Real-time insights on memory usage, system health and activity stats',
        'screenshots.memories.title': 'Memory Management',
        'screenshots.memories.desc': 'View and manage individual memory records with search, filter and edit support',
        'screenshots.optimization.title': 'Memory Optimization',
        'screenshots.optimization.desc': 'Analyze and optimize memory quality with automatic deduplication and merging',
        'screenshots.monitor.title': 'Performance Monitor',
        'screenshots.monitor.desc': 'Monitor memory performance and activity with real-time system status',
        'screenshots.analytics.title': 'Data Analytics',
        'screenshots.analytics.desc': 'Detailed insights and trend analysis to understand memory evolution over time',
        
        // Ecosystem
        'ecosystem.title': 'Complete Ecosystem',
        'ecosystem.subtitle': 'Modular design, flexible integration',
        'ecosystem.core.badge': 'Core Engine',
        'ecosystem.core.desc': 'Contains all memory management business logic including extraction, optimization and search',
        'ecosystem.core.tag1': 'Fact Extraction',
        'ecosystem.core.tag2': 'Semantic Search',
        'ecosystem.core.tag3': 'Auto Optimization',
        'ecosystem.service.badge': 'REST API',
        'ecosystem.service.desc': 'High-performance REST API accessible from any programming language or system',
        'ecosystem.service.tag1': 'Cross-Language',
        'ecosystem.service.tag2': 'RESTful',
        'ecosystem.service.tag3': 'High Concurrency',
        'ecosystem.cli.badge': 'CLI Tool',
        'ecosystem.cli.desc': 'Command-line tool for developers and admins to interact directly with memory store',
        'ecosystem.cli.tag1': 'Easy Management',
        'ecosystem.cli.tag2': 'Batch Operations',
        'ecosystem.cli.tag3': 'Script Friendly',
        'ecosystem.insights.badge': 'Web Dashboard',
        'ecosystem.insights.desc': 'Web-based management tool for memory analysis and visualization',
        'ecosystem.insights.tag1': 'Real-time Monitor',
        'ecosystem.insights.tag2': 'Data Analytics',
        'ecosystem.insights.tag3': 'Visualization',
        'ecosystem.mcp.badge': 'MCP Adapter',
        'ecosystem.mcp.desc': 'Adapter for integrating Cortex Memory as a tool in AI agent frameworks',
        'ecosystem.mcp.tag1': 'MCP Protocol',
        'ecosystem.mcp.tag2': 'Plugin-based',
        'ecosystem.mcp.tag3': 'Easy Integration',
        'ecosystem.rig.badge': 'Rig Integration',
        'ecosystem.rig.desc': 'Dedicated Rig framework integration for autonomous LLM agents',
        'ecosystem.rig.tag1': 'Rig Native',
        'ecosystem.rig.tag2': 'Agent Optimized',
        'ecosystem.rig.tag3': 'Out-of-the-box',
        
        // Use Cases
        'usecases.title': 'Use Cases',
        'usecases.chatbot.title': 'Intelligent Chatbots',
        'usecases.chatbot.desc': 'Remember user conversation history and preferences for personalized service',
        'usecases.assistant.title': 'Personal AI Assistant',
        'usecases.assistant.desc': 'Learn user habits over time to become a true "second brain" companion',
        'usecases.agent.title': 'Autonomous AI Agents',
        'usecases.agent.desc': 'Provide persistent memory backbone for AI agents to execute complex tasks',
        'usecases.learning.title': 'Learning Companion',
        'usecases.learning.desc': 'Track learning progress and knowledge points for targeted tutoring suggestions',
        
        // Get Started
        'getstarted.title': 'Get Started',
        'getstarted.step1.title': 'Install Dependencies',
        'getstarted.step2.title': 'Install Cortex Memory',
        'getstarted.step3.title': 'Configure and Run',
        'getstarted.link1.title': 'Full Documentation',
        'getstarted.link1.desc': 'View detailed technical docs and architecture',
        'getstarted.link2.title': 'Example Projects',
        'getstarted.link2.desc': 'Check out Cortex TARS and other real-world examples',
        'getstarted.link3.title': 'Community Support',
        'getstarted.link3.desc': 'Ask questions, report issues or join discussions',
        
        // CTA
        'cta.title': 'Ready to Give Your AI Memory?',
        'cta.subtitle': 'Join the developer community to build truly intelligent AI applications',
        'cta.github': 'Visit GitHub',
        'cta.sponsor': '❤️ Sponsor Project',
        'cta.star': '⭐ Give us a Star to support development',
        
        // Footer
        'footer.tagline': 'AI-native memory management framework',
        'footer.resources': 'Resources',
        'footer.community': 'Community',
        'footer.about': 'About',
        'footer.github': 'GitHub',
        'footer.docs': 'Docs',
        'footer.examples': 'Examples',
        'footer.issues': 'Issues',
        'footer.discussions': 'Discussions',
        'footer.sponsor': 'Sponsor',
        'footer.license': 'MIT License',
        'footer.author': 'Author',
        'footer.copyright': '© 2025 Cortex Memory. Licensed under MIT.',
        
        // Copy button
        'copy.button': 'Copy',
        'copy.success': 'Copied!'
    }
};

// Get current language from localStorage or default to zh-CN
let currentLang = localStorage.getItem('cortex-mem-lang') || 'zh-CN';

// Translation function
function t(key) {
    return translations[currentLang][key] || key;
}

// Update page content based on language
function updatePageLanguage() {
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        // Check if element has data-i18n-attr to update attribute instead of text
        const attr = element.getAttribute('data-i18n-attr');
        if (attr) {
            element.setAttribute(attr, translation);
        } else {
            element.textContent = translation;
        }
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'zh-CN' ? 'EN' : '中文';
    }
    
    // Update copy buttons text
    document.querySelectorAll('.copy-button').forEach(button => {
        if (button._updateText && typeof button._updateText === 'function') {
            button._updateText();
        }
    });
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'zh-CN' ? 'en' : 'zh-CN';
    localStorage.setItem('cortex-mem-lang', currentLang);
    updatePageLanguage();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
});
