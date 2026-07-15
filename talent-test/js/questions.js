const questions = [

{
    id:1,

    title:"当一天高强度工作结束后，你更倾向：",

    options:[

        {
            text:"独自整理今天的经历，思考哪些地方还能做得更好。",
            mbti:"I",
            score:{
                insight:1,
                learner:1
            }
        },

        {
            text:"约朋友聊天，分享今天发生的事情，从交流中恢复状态。",
            mbti:"E",
            score:{
                connector:2
            }
        },

        {
            text:"参加聚会或认识新朋友，让自己接触新的观点。",
            mbti:"E",
            score:{
                connector:1,
                explorer:1
            }
        },

        {
            text:"回家做自己喜欢的事情，不太希望被别人打扰。",
            mbti:"I",
            score:{
                learner:1,
                insight:1
            }
        }

    ]

},

{
    id:2,

    title:"接到一个完全陌生的工作任务，你通常会：",

    options:[

        {
            text:"先寻找案例和资料，了解别人是如何完成的。",
            mbti:"S",
            score:{
                learner:2,
                planner:1
            }
        },

        {
            text:"思考这件事情有没有全新的做法。",
            mbti:"N",
            score:{
                creator:2,
                explorer:1
            }
        },

        {
            text:"先弄清楚规则、目标和限制条件。",
            mbti:"S",
            score:{
                planner:2,
                insight:1
            }
        },

        {
            text:"脑海里快速构想几种可能，再决定从哪开始。",
            mbti:"N",
            score:{
                explorer:2,
                creator:1
            }
        }

    ]

},

{
    id:3,

    title:"团队讨论方案时，你最容易关注：",

    options:[

        {
            text:"哪个方案逻辑最合理、成本最低。",
            mbti:"T",
            score:{
                insight:2,
                planner:1
            }
        },

        {
            text:"哪个方案大家更容易接受、愿意配合。",
            mbti:"F",
            score:{
                connector:2,
                leader:1
            }
        },

        {
            text:"哪个方案最容易快速落地。",
            mbti:"T",
            score:{
                executor:2,
                planner:1
            }
        },

        {
            text:"哪个方案最符合长期的发展方向。",
            mbti:"T",
            score:{
                leader:2,
                insight:1
            }
        }

    ]

},

{
    id:4,

    title:"面对一个持续三个月的项目，你更倾向：",

    options:[

        {
            text:"先做好完整计划，再按照节奏推进。",
            mbti:"J",
            score:{
                planner:2,
                executor:1
            }
        },

        {
            text:"先开始执行，根据实际情况不断调整。",
            mbti:"P",
            score:{
                executor:2,
                explorer:1
            }
        },

        {
            text:"保持灵活，不断尝试新的方向。",
            mbti:"P",
            score:{
                explorer:2,
                creator:1
            }
        },

        {
            text:"建立一套稳定的方法，让整个项目顺利运行。",
            mbti:"J",
            score:{
                planner:2,
                insight:1
            }
        }

    ]

},

{
    id:5,

    title:"公司准备开发一个新产品，但市场资料很少，你会：",

    options:[

        {
            text:"先研究用户需求和行业趋势，再决定方向。",
            score:{
                insight:2,
                learner:1
            }
        },

        {
            text:"大胆提出几个创新方案，寻找新的机会。",
            score:{
                creator:2,
                explorer:1
            }
        },

        {
            text:"联系潜在用户或行业人士，获取真实反馈。",
            score:{
                connector:2,
                explorer:1
            }
        },

        {
            text:"快速做一个简单版本，用结果验证想法。",
            score:{
                executor:2,
                learner:1
            }
        }

    ]

},

{
    id:6,

    title:"领导说：“把这个业务优化一下。”你的第一反应是：",

    options:[

        {
            text:"分析目前流程的问题到底出在哪里。",
            score:{
                insight:2,
                planner:1
            }
        },

        {
            text:"重新设计一套新的解决方案。",
            score:{
                creator:2,
                leader:1
            }
        },

        {
            text:"把目标拆开，马上安排执行。",
            score:{
                executor:2,
                planner:1
            }
        },

        {
            text:"先确认目标、资源和时间，再开始制定计划。",
            score:{
                planner:2,
                insight:1
            }
        }

    ]

},
{
    id: 7,
    category: "talent",
    title: "加入一个新的团队后，面对完全陌生的同事和工作内容，你通常会：",
    options: [
        {
            text: "先观察团队的工作方式和分工，再决定如何融入。",
            score: {
                insight: 2,
                planner: 1
            }
        },
        {
            text: "主动认识大家，希望尽快建立合作关系。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "主动承担任务，用行动证明自己的能力。",
            score: {
                executor: 2,
                leader: 1
            }
        },
        {
            text: "思考这个团队还有哪些值得改进的新机会。",
            score: {
                creator: 2,
                explorer: 1
            }
        }
    ]
},

{
    id: 8,
    category: "talent",
    title: "一个重要项目没有达到预期效果，你最想先弄清楚的是：",
    options: [
        {
            text: "真正导致失败的核心原因是什么。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "有没有新的方向值得重新尝试。",
            score: {
                explorer: 2,
                creator: 1
            }
        },
        {
            text: "如何重新协调团队资源继续推进。",
            score: {
                leader: 2,
                connector: 1
            }
        },
        {
            text: "如何总结经验，避免以后再次发生。",
            score: {
                learner: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 9,
    category: "talent",
    title: "当你体验到一款非常优秀的产品时，你最容易关注的是：",
    options: [
        {
            text: "它真正解决了用户哪些痛点。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "它为什么能够快速传播和增长。",
            score: {
                explorer: 2,
                connector: 1
            }
        },
        {
            text: "它的设计细节为什么让人喜欢。",
            score: {
                creator: 2,
                insight: 1
            }
        },
        {
            text: "它背后的运营和管理体系。",
            score: {
                planner: 2,
                leader: 1
            }
        }
    ]
},

{
    id: 10,
    category: "talent",
    title: "工作中突然发生紧急情况，你通常会：",
    options: [
        {
            text: "快速判断问题影响范围，再安排处理顺序。",
            score: {
                insight: 2,
                planner: 1
            }
        },
        {
            text: "马上行动，先把问题解决再说。",
            score: {
                executor: 2,
                leader: 1
            }
        },
        {
            text: "联系相关人员，一起协作处理。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "顺便优化流程，减少以后再次发生。",
            score: {
                planner: 2,
                learner: 1
            }
        }
    ]
},

{
    id: 11,
    category: "talent",
    title: "如果让你负责筹备一次大型活动，你最期待负责哪一部分？",
    options: [
        {
            text: "活动主题和整体创意策划。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "活动流程和执行安排。",
            score: {
                planner: 2,
                executor: 1
            }
        },
        {
            text: "合作伙伴沟通和资源协调。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "现场统筹，确保活动顺利完成。",
            score: {
                executor: 2,
                leader: 1
            }
        }
    ]
},

{
    id: 12,
    category: "talent",
    title: "面对一个没有标准答案的新问题，你更倾向于：",
    options: [
        {
            text: "先研究它背后的规律，再寻找最佳方案。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "大胆尝试新的方法，即使存在失败风险。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "向有经验的人请教，再结合自己的思路。",
            score: {
                connector: 2,
                learner: 1
            }
        },
        {
            text: "先快速实践，再根据结果不断调整。",
            score: {
                executor: 2,
                explorer: 1
            }
        }
    ]
},
{
    id: 13,
    category: "talent",
    title: "如果让你负责一个全新的项目，你最希望首先拥有的是：",
    options: [
        {
            text: "充分的数据和背景信息。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "自由发挥创意的空间。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "可靠的团队成员共同合作。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "明确的目标和时间节点。",
            score: {
                planner: 2,
                executor: 1
            }
        }
    ]
},

{
    id: 14,
    category: "talent",
    title: "面对两个都不错的机会，你通常如何做决定？",
    options: [
        {
            text: "分析优缺点，再做最理性的选择。",
            score: {
                insight: 2,
                planner: 1
            }
        },
        {
            text: "选择更有创新和成长空间的机会。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "选择更容易与优秀的人一起合作。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "选择最容易快速取得成果的机会。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 15,
    category: "talent",
    title: "工作中，同事经常因为什么事情来找你？",
    options: [
        {
            text: "请我分析问题、提供思路。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "希望我提出新的想法。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "希望我协调资源或沟通关系。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "希望我推进事情尽快完成。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 16,
    category: "talent",
    title: "如果只能提升一项能力，你最希望提升的是：",
    options: [
        {
            text: "分析复杂问题的能力。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "创新和创造能力。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "沟通协调和影响他人的能力。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "执行和推进项目的能力。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 17,
    category: "talent",
    title: "当团队出现意见分歧时，你更可能：",
    options: [
        {
            text: "分析每个人观点背后的原因。",
            score: {
                insight: 2,
                planner: 1
            }
        },
        {
            text: "提出一个新的折中方案。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "倾听大家意见，促进达成一致。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "尽快确定方案，避免影响进度。",
            score: {
                executor: 2,
                leader: 1
            }
        }
    ]
},

{
    id: 18,
    category: "talent",
    title: "完成一个项目后，你最有成就感的是：",
    options: [
        {
            text: "发现了新的规律和经验。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "创造了以前没有的成果。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "团队合作得非常顺利。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "项目按时、高质量完成。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},
{
    id: 19,
    category: "talent",
    title: "如果你创办了一家公司，但第一款产品销量远低于预期，你会优先做什么？",
    options: [
        {
            text: "重新研究用户需求，确认真正的问题在哪里。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "尝试设计一款完全不同的产品方向。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "拜访客户和合作伙伴，了解市场反馈。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "快速优化现有产品，再次投入市场验证。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 20,
    category: "talent",
    title: "如果你只能把预算投入一个方向，你会优先选择：",
    options: [
        {
            text: "深入研究市场和用户，降低决策风险。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "打造一个令人眼前一亮的新产品。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "组建一支优秀、有战斗力的团队。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "建立高效的执行流程，确保项目快速推进。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 21,
    category: "talent",
    title: "如果未来五年只能培养一种能力，你最愿意投入的是：",
    options: [
        {
            text: "洞察行业趋势，看清机会和风险。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "持续创造新产品、新模式。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "影响更多人，建立广泛的人脉和资源。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "把复杂事情高效落地执行。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 22,
    category: "talent",
    title: "如果公司突然获得一笔充足资金，你最希望先改善的是：",
    options: [
        {
            text: "建立数据分析和决策体系。",
            score: {
                insight: 2,
                planner: 1
            }
        },
        {
            text: "研发新的产品或服务。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "招聘更多优秀人才，提升团队实力。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "优化业务流程，提高整体效率。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 23,
    category: "talent",
    title: "当别人评价你时，你最希望听到哪一句话？",
    options: [
        {
            text: "他总能看清问题的本质。",
            score: {
                insight: 2,
                learner: 1
            }
        },
        {
            text: "他总能提出令人惊喜的新想法。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "和他合作总是很舒服、很高效。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "交给他的事情，总能放心完成。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
},

{
    id: 24,
    category: "talent",
    title: "如果今天开始，你可以自由选择未来十年的职业道路，你更愿意成为：",
    options: [
        {
            text: "发现趋势、制定战略的人。",
            score: {
                insight: 2,
                leader: 1
            }
        },
        {
            text: "不断创造产品和价值的人。",
            score: {
                creator: 2,
                explorer: 1
            }
        },
        {
            text: "凝聚团队、影响他人的人。",
            score: {
                connector: 2,
                leader: 1
            }
        },
        {
            text: "推动目标实现、把想法变成现实的人。",
            score: {
                executor: 2,
                planner: 1
            }
        }
    ]
}
];
