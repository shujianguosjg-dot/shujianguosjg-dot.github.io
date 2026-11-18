export type Locale = 'zh' | 'en';
export const portfolio = {
zh: {
  name: '舒建国', nameLatin: 'Jianguo Shu',
  brand: '舒建国 · 研究与工程作品集',
  field: '计算机视觉 · 双目/多目三维重建 · 机器人视觉感知',
  intro: '四川大学 2027 届本科生，已推免中国科学院自动化研究所人工智能硕士（拟于 2027 年 9 月入学）。关注双目/多目三维重建、视觉感知与机器人系统，重视可复现的实验设计和真实工程落地。',
  availability: '成都 · 可连续全职实习 6 个月',
  eyebrow: 'Computer Vision / 3D Reconstruction / Robotics',
  primaryCTA: '查看核心项目', secondaryCTA: '简历与经历', latest: '根据最新简历整理 · 2026 年 11 月',
  research: '主要研究与项目', researchDesc: '从深度双目模型重实现，到真实多相机三维重建和机器人视觉系统。项目数据来自个人简历，注明测试范围及尚未完成的工作。',
  highlights: [{value:'3 / 77',label:'四川大学综合排名 · TOP 4%'},{value:'16.56%',label:'NBS 同分辨率适配：加权 dev EPE 降幅'},{value:'4 相机',label:'真实异构 Rig 端到端重建'},{value:'1,383',label:'自动化测试 · 0 failed'}],
  nav: [{id:'home',label:'首页',path:'/'},{id:'projects',label:'核心项目',path:'/projects/'},{id:'cv',label:'简历与经历',path:'/cv/'},{id:'blog',label:'研究笔记',path:'/blog/'}],
  readMore:'查看详情', allProjects:'全部项目', sectionResearch:'核心项目经历', sectionIntern:'实习经历', sectionEducation:'教育背景', sectionSkills:'专业技能', sectionPapers:'论文（投稿中）', sectionHonors:'竞赛与荣誉',
  contact:'联系邮箱', github:'GitHub 主页', noMedia:'科研图片和视频以可追溯的原始实验为依据，展示时保留实验条件。',
  cvIntro:'以下内容由最新求职简历拆解整理，保留教育时间、项目角色、实验条件、论文投稿状态等关键信息。出于隐私考虑，公开网页未展示手机号和微信号。',
  resumeStatus:'2027 届本科生 · 已推免硕士（尚未入学）',
  education:[
    {school:'四川大学（985）',degree:'飞行器控制与信息工程 · 本科',date:'2023.09 – 2027.06',lines:['GPA 3.74/4.00 · 综合排名 3/77（前 4%） · 平均分 88.01','CET-6：560']},
    {school:'中国科学院自动化研究所',degree:'人工智能 · 硕士（已推免，拟入学）',date:'预计 2027.09 入学',lines:['已获推免资格；当前尚未开始硕士阶段学习。']}
  ],
  internship:{company:'频泰科技',role:'计算机视觉算法实习生 · 三维重建',date:'2026.10 – 2026.12',direction:'基于真实三维扫描数据的局部几何重建与点云补全',bullets:[
    '面向真实扫描设备产生的 PLY 数据，梳理 Point Cloud / Mesh / Voxel / SDF 表示及转换，设计降采样、法向估计、缺损模拟、重建预处理与可视化流程。',
    '围绕复杂曲面局部缺损补全，调研几何插值、Poisson Reconstruction、PointNet / Transformer / DeepSDF；设计 Mask 缺损合成与 PyTorch 训练验证方案，规划 CD、F-Score、Hausdorff Distance、法向一致性指标。'
  ]},
  skills:[
    {label:'三维视觉与模型',items:['DINOv2','ViT / Transformer / DPT','双目/多目几何','极线校正 / 三角化','视差与深度','点云 / Mesh / Voxel / SDF','OpenCV / COLMAP']},
    {label:'编程与工程',items:['Python / PyTorch','NumPy / SciPy','pytest','C / MATLAB','Linux / Git']},
    {label:'机器人与感知',items:['RGB-D / YOLO11','ROS / TF','EKF','覆盖路径规划']}
  ],
  projects:[
    {slug:'vla',name:'SmolVLA 示范子集选择与小样本策略微调研究',short:'在 LIBERO 仿真基准研究 10% 示范数据预算下的选择策略：构建选择、训练、固定评测和审计流程，并分析未达到统计显著性的负结果。',category:'具身智能 · LIBERO 仿真',period:'2026 年研究实验',role:'本人实现示范筛选、评测协议、结果审计和机制分析；基础策略使用上游 LeRobot SmolVLA',tags:['SmolVLA','LIBERO Simulation','DINOv2','Data Selection'],bullets:[
      '研究从 1,693 回合、273,465 帧示范池中选择 10% 数据（168 回合）进行策略微调；比较 random、DINOv2-state 与 DINOv2-k-center 选择方法。训练使用上游 SmolVLA（450M 总参数、99.9M 可训练），统一 10k 步、单卡 48GB 条件。',
      '建立固定评测协议、run registry、结果校验与配对比较流程，并将子集选择实现与上游模型微调清晰区分；action-medoid 选择器仅生成子集，尚未完成相应训练。',
      'mini(100) 筛选协议中，random(seed 1000) 成功率 66.0%，DINOv2-k-center(seed 1000) 为 53.0%；每臂 100 回合、共 5 个实验臂；10 组配对比较经 Holm 校正后均不显著，不能据此宣称优劣。',
      '机制分析覆盖 40 个任务：k-center 筛出的示范在视觉空间距离任务均值的比值为 1.252（random 1.000）；真实定性视频来自 LIBERO 仿真，未部署到实体机器人。'
    ],note:'仅为 LIBERO 仿真 mini(100) 筛选结果，不等于 400 回合正式评测；该项目未实现独立的 ODE Policy 或 Spectrally Routed Diffusion Policy，也未验证统计显著性的性能提升。',external:'https://github.com/huggingface/lerobot',externalLabel:'上游 LeRobot 项目'},
    {slug:'nbs',name:'NBS 双目基础模型重实现与多目异构三维重建系统',short:'在无官方代码及权重条件下重实现 NBS，并完成真实 4 相机 Rig 重建、误差归因和统一评测。',category:'双目/多目三维视觉',period:'研究项目',role:'技术方案设计、实验设计、评测审计与系统集成',tags:['PyTorch','DINOv2','Attention / DPT','Stereo / Multi-view'],
     bullets:[
      '基于 PyTorch 重实现 NBS（DINOv2 ViT-L/14-Registers + Local/Global Attention + DPT，356M 参数）；完成 343/344 tensors 权重映射、单视图前向数值校验 max_abs=0、位置编码 148²→296² 迁移。',
      '在 1330×1932 同分辨率适配实验中，加权 dev EPE 下降 16.56%；该结果是特定实验配置下的相对改进，不等同于原论文全部指标复现。',
      '集成内外参适配、几何约束配对、自实现 Bouguet 极线校正、视差深度恢复、DLT 三角化、点云处理和可见性感知评测；真实 4 相机 Rig 包含 4 组内参、4 种分辨率、12 个视角及 9 个有效相机对。',
      '关键点极线残差 0.13–0.30 px；NBS 点云 F1@2cm：0.546（raw）/ 0.494（fused）。建立 5 个数据域、162 对样本的统一评测体系，完成 1,383 项自动化测试（0 failed），定位训练/推理分辨率失配的跨域退化。'
     ],note:'基于无官方代码及权重条件的研究性重实现；不声明已完全达到原论文全部结果。',external:'https://intrinsic-experimental.github.io/nbs-website/',externalLabel:'NBS 原论文项目主页'},
    {slug:'surface-completion',name:'真实三维扫描的局部几何重建与点云补全',short:'频泰科技实习：围绕 PLY 真实扫描数据、局部缺损建模、补全算法调研和评测方案设计。',category:'三维重建 · 实习',period:'2026.10 – 2026.12',role:'计算机视觉算法实习生',tags:['PLY','Point Cloud','Mesh / SDF','PyTorch'],
     bullets:[
      '面向真实扫描设备产生的 PLY 三维数据，梳理 Point Cloud、Mesh、Voxel 与 SDF 的表示、转换及适用场景。',
      '设计点云降采样、法向估计、局部缺损模拟与曲面重建的数据预处理和可视化流程。',
      '调研传统几何插值、Poisson Reconstruction 以及 PointNet、Transformer、DeepSDF 等方法。',
      '设计 Mask 缺损合成与 PyTorch 训练验证方案，规划 Chamfer Distance（CD）、F-Score、Hausdorff Distance 和法向一致性评测。'
     ],note:'此处准确区分已开展的方案设计与规划中的训练评测；未宣称已完成未提供的量化结果。'},
    {slug:'ur-grasping',name:'UR 机械臂 RGB-D 视觉抓取',short:'以 YOLO11、RealSense D435 和坐标变换连接视觉检测、三维定位与抓取规划。',category:'机器人视觉感知',period:'2026.08 – 2026.09',role:'项目实施',tags:['UR Robot','RealSense D435','YOLO11','RGB-D'],
     bullets:[
      '基于 UR 协作机械臂和 Intel RealSense D435，完成相机/机械臂标定及 YOLO11 检测、分割实验。',
      '结合深度图、相机内参和坐标变换估计目标三维位置，形成从视觉检测到空间定位和抓取规划的处理链路。'
     ]},
    {slug:'video2motion',name:'Video2Motion2Action Hackathon',short:'对齐视频手部关键点、Mask 和 3D Skeleton，建立时序质量可视化与异常帧核验流程。',category:'视频示教 · 3D 手部重建',period:'2026.07',role:'上海人工智能实验室物理智能 Hackathon · 项目负责人',tags:['Python','MediaPipe','2D / 3D Keypoints'],
     bullets:[
      '对齐示教视频中的 2D 手部 Keypoints、可见手部 Mask 与 3D Skeleton，建立时序质量可视化和异常帧核验流程。',
      '两组序列分别完成 182/182 和 534/534 帧有效性检查；该数值表示核验覆盖，不代表动作成功率。'
     ]},
    {slug:'wing-scanning',name:'面向机翼全覆盖扫描的智能车',short:'设计多维效用覆盖路径规划与 ROS 运动控制、EKF 融合定位系统。',category:'路径规划 · 机器人系统',period:'2025.07 – 2026.09',role:'大学生创新创业训练计划 · 项目负责人',tags:['CPP','EKF','ROS / TF','STM32'],
     bullets:[
      '设计多维效用覆盖路径规划（CPP）；在论文仿真场景中实现 100% 覆盖率（并非实车覆盖率）。',
      '完成麦克纳姆轮运动学、STM32 速度 PID，搭建 ROS 分层系统及编码器 / IMU / 视觉 EKF 融合定位和 TF 坐标体系。'
     ]}
  ],
  papers:[
    {name:'《非结构化环境下基于多维效用决策的全覆盖路径规划》',venue:'在投',status:'投稿中'},
    {name:'Evidence-Graded Evaluation of Learned Planner Selection in Complete Coverage Path Planning',venue:'Neurocomputing',status:'Under review'}
  ],
  honors:['全球校园人工智能算法精英大赛 · 国家一等奖','第十九届“挑战杯” · 国家三等奖','iCAN · 国家二等奖','国家励志奖学金（2023–2025）'],
  noteTitle:'研究笔记',noteDesc:'论文阅读、模型重实现、三维几何和机器人视觉实验笔记正在整理。暂不发布尚未审核的内部报告。',
  projectLabels:{overview:'项目概况',details:'关键工作与结果',role:'角色',period:'时间',status:'范围与说明',paper:'参考链接',back:'返回项目列表'},
  contactDesc:'项目交流与实习联系可通过以下邮箱发送邮件。',copyright:'基于 Astro 与 Astrofy 设计思路搭建。'
},
en: {
  name:'Jianguo Shu',nameLatin:'Jianguo Shu',
  brand:'Jianguo Shu · Research Portfolio',
  field:'Computer Vision · Stereo / Multi-view 3D Reconstruction · Robot Perception',
  intro:'I am a Class of 2027 undergraduate at Sichuan University, with a recommended admission to the M.S. program in Artificial Intelligence at the Institute of Automation, Chinese Academy of Sciences (expected enrollment: September 2027). I work on stereo and multi-view reconstruction, visual perception, and robotics, with a focus on reproducible evaluation and engineering.',
  availability:'Chengdu, China · Available for a six-month full-time internship',
  eyebrow:'Computer Vision / 3D Reconstruction / Robotics',
  primaryCTA:'Explore projects',secondaryCTA:'Resume & experience',latest:'Based on latest resume · November 2026',
  research:'Selected Research & Projects',researchDesc:'From reproducing deep stereo models to real multi-camera reconstruction and robotic perception systems. Metrics are kept within their stated evaluation settings.',
  highlights:[{value:'3 / 77',label:'Overall rank at Sichuan University · Top 4%'},{value:'16.56%',label:'Weighted dev EPE reduction in NBS same-resolution adaptation'},{value:'4 cameras',label:'End-to-end reconstruction on a real heterogeneous rig'},{value:'1,383',label:'Automated tests · 0 failed'}],
  nav:[{id:'home',label:'Home',path:'/'},{id:'projects',label:'Projects',path:'/projects/'},{id:'cv',label:'Resume & Experience',path:'/cv/'},{id:'blog',label:'Research Notes',path:'/blog/'}],
  readMore:'Read case study',allProjects:'All projects',sectionResearch:'Selected Projects',sectionIntern:'Internship',sectionEducation:'Education',sectionSkills:'Technical Skills',sectionPapers:'Manuscripts (not yet accepted)',sectionHonors:'Competitions & Honors',
  contact:'Email',github:'GitHub',noMedia:'Scientific media is published with experiment conditions, limitations, and provenance when available.',
  cvIntro:'This website is adapted from my latest resume. Academic timelines, individual contributions, evaluation conditions, and manuscript submission statuses are preserved. Phone and WeChat details are intentionally excluded from the public site.',
  resumeStatus:'Class of 2027 undergraduate · Admitted to a future M.S. program (not yet enrolled)',
  education:[
    {school:'Sichuan University (Project 985)',degree:'B.Eng. in Aircraft Control and Information Engineering',date:'Sep 2023 – Jun 2027',lines:['GPA: 3.74/4.00 · Overall rank: 3/77 (Top 4%) · Average score: 88.01','CET-6: 560']},
    {school:'Institute of Automation, Chinese Academy of Sciences',degree:'M.S. in Artificial Intelligence (recommended admission)',date:'Expected start: Sep 2027',lines:['Admitted through the recommendation process; graduate studies have not yet begun.']}
  ],
  internship:{company:'Pintai Technology',role:'Computer Vision Algorithm Intern · 3D Reconstruction',date:'Oct – Dec 2026',direction:'Local geometric reconstruction and point cloud completion on real 3D scan data',bullets:[
    'Worked with PLY data from real scanning equipment; investigated Point Cloud / Mesh / Voxel / SDF representations and transformations, and designed preprocessing and visualization workflows covering downsampling, normal estimation, defect simulation, and surface reconstruction.',
    'Investigated geometric interpolation, Poisson Reconstruction, PointNet, Transformer, and DeepSDF for local surface completion. Designed a Mask-based defect synthesis and PyTorch training/validation plan, with proposed CD, F-Score, Hausdorff Distance, and normal-consistency metrics.'
  ]},
  skills:[
    {label:'3D Vision & Models',items:['DINOv2','ViT / Transformer / DPT','Stereo / Multi-view Geometry','Epipolar Rectification / Triangulation','Disparity & Depth','Point Cloud / Mesh / Voxel / SDF','OpenCV / COLMAP']},
    {label:'Software & Experimentation',items:['Python / PyTorch','NumPy / SciPy','pytest','C / MATLAB','Linux / Git']},
    {label:'Robotics & Perception',items:['RGB-D / YOLO11','ROS / TF','EKF','Coverage Path Planning']}
  ],
  projects:[
    {slug:'vla',name:'SmolVLA Demonstration Subset Selection & Data-efficient Fine-tuning',short:'Studying which 10% of LIBERO demonstrations to use for fine-tuning, with controlled training, fixed evaluation, audit infrastructure, and a carefully reported negative result.',category:'Embodied AI · LIBERO Simulation',period:'2026 research experiments',role:'Implemented selection, evaluation protocol, audit, and mechanism analysis; used upstream LeRobot SmolVLA as the base policy',tags:['SmolVLA','LIBERO Simulation','DINOv2','Data Selection'],bullets:[
      'Selected 10% (168 episodes) from a 1,693-episode / 273,465-frame demonstration pool; compared random, DINOv2-state, and DINOv2-k-center subset selectors. Fine-tuning used upstream SmolVLA (450M total parameters, 99.9M trainable), 10k steps, and one 48GB GPU.',
      'Built a fixed evaluation protocol, run registry, result QA, and paired comparison workflow. Separated custom data selection from upstream LeRobot fine-tuning; action-medoid subsets were built but not trained.',
      'Under a mini(100) screening protocol, random (seed 1000) reached 66.0% and DINOv2-k-center (seed 1000) reached 53.0%; five arms each used 100 evaluation episodes. None of the 10 paired comparisons was significant after Holm correction.',
      'Mechanism analysis across 40 tasks showed k-center selected visual features 1.252× as far from each task mean (random = 1.000). All video demonstrations come from LIBERO simulation, not a physical robot.'
    ],note:'LIBERO simulation, mini(100) screening only—not the unrun 400-episode full protocol. No custom ODE Policy, spectrally routed diffusion architecture, or statistically significant improvement is claimed.',external:'https://github.com/huggingface/lerobot',externalLabel:'Upstream LeRobot project'},
    {slug:'nbs',name:'NBS Stereo Foundation Model Reimplementation & Heterogeneous Multi-view 3D Reconstruction',short:'Reimplemented NBS without public code or weights, built a four-camera reconstruction pipeline, and audited evaluation across multiple domains.',category:'Stereo & Multi-view 3D Vision',period:'Research project',role:'Technical approach, experimental design, evaluation auditing, and system integration',tags:['PyTorch','DINOv2','Attention / DPT','Stereo / Multi-view'],
     bullets:[
       'Reimplemented NBS in PyTorch without official code or released weights (DINOv2 ViT-L/14-Registers + Local/Global Attention + DPT; 356M parameters). Completed mapping of 343/344 tensors, single-view forward numerical verification (max_abs=0), and positional encoding transfer from 148² to 296².',
       'Achieved a 16.56% reduction in weighted dev EPE in a same-resolution adaptation experiment at 1330×1932. This is a relative improvement in a particular experimental setting, not a claim of reproducing all original-paper benchmarks.',
       'Integrated camera intrinsic/extrinsic adaptation, geometry-constrained pairing, an independently implemented Bouguet epipolar rectification procedure, disparity-to-depth recovery, DLT triangulation, point-cloud processing, and visibility-aware evaluation. Tested on a real rig comprising 4 cameras, 4 intrinsic configurations, 4 resolutions, 12 viewpoints, and 9 valid camera pairs.',
       'Measured keypoint epipolar residuals of 0.13–0.30 px and NBS point-cloud F1@2cm of 0.546 (raw) / 0.494 (fused). Built an evaluation set with 162 pairs from 5 domains and ran 1,383 automated tests (0 failed); analysis identified resolution mismatch between training and inference as a contributor to cross-domain degradation.'
     ],note:'Research reimplementation performed without official released code or weights. Full reproduction of all reported paper results is not claimed.',external:'https://intrinsic-experimental.github.io/nbs-website/',externalLabel:'Original NBS project website'},
    {slug:'surface-completion',name:'Local Geometric Reconstruction & Point Cloud Completion on Real 3D Scans',short:'Internship work involving real PLY scan data, local defects, 3D representations, method comparisons, and evaluation design.',category:'3D Reconstruction · Internship',period:'Oct – Dec 2026',role:'Computer Vision Algorithm Intern',tags:['PLY','Point Cloud','Mesh / SDF','PyTorch'],
     bullets:[
       'Explored representations and conversions among Point Cloud, Mesh, Voxel, and SDF for real scanned PLY data.',
       'Designed point-cloud downsampling, normal estimation, local defect simulation, and surface-reconstruction preprocessing and visualization workflows.',
       'Reviewed geometric interpolation, Poisson Reconstruction, PointNet, Transformer, and DeepSDF for local surface completion.',
       'Designed Mask-based defect synthesis and PyTorch training/validation plans; proposed Chamfer Distance, F-Score, Hausdorff Distance, and normal-consistency evaluations.'
     ],note:'The resume describes algorithm research, workflow design, and planned evaluation; this page does not claim quantitative training results not provided in the source resume.'},
    {slug:'ur-grasping',name:'UR Robot RGB-D Visual Grasping',short:'Connected YOLO11, Intel RealSense D435, calibration, coordinate transformations, 3D localization, and grasp planning.',category:'Robot Visual Perception',period:'Aug – Sep 2026',role:'Project implementation',tags:['UR Robot','RealSense D435','YOLO11','RGB-D'],
     bullets:[
       'Performed camera-to-robot calibration and YOLO11 detection/segmentation experiments using a UR collaborative robot and Intel RealSense D435.',
       'Combined depth images, camera parameters, and coordinate transformations to estimate object 3D positions and connect perception, localization, and grasp planning.'
     ]},
    {slug:'video2motion',name:'Video2Motion2Action Hackathon',short:'Aligned 2D hand keypoints, visible masks, and 3D skeletons; validated two entire video-sequence datasets.',category:'Video Demonstration · 3D Hand Reconstruction',period:'Jul 2026',role:'Project Lead · Shanghai AI Laboratory Physical Intelligence Hackathon',tags:['Python','MediaPipe','2D / 3D Keypoints'],
     bullets:[
       'Aligned 2D hand keypoints, visible hand masks, and 3D skeletons in demonstration videos; developed temporal quality visualization and abnormal-frame checks.',
       'Completed validity checks for 182/182 and 534/534 frames in two sequences. These figures measure coverage of frame checks, not motion success rates.'
     ]},
    {slug:'wing-scanning',name:'Intelligent Vehicle for Full-Coverage Wing Scanning',short:'Developed multi-dimensional utility coverage path planning, ROS control architecture, and EKF-based sensor fusion.',category:'Robotics · Coverage Path Planning',period:'Jul 2025 – Sep 2026',role:'Project Lead · Undergraduate Innovation and Entrepreneurship Training Program',tags:['CPP','EKF','ROS / TF','STM32'],
     bullets:[
       'Developed multi-dimensional utility coverage path planning (CPP), achieving 100% coverage in the paper’s simulation scenario—not a claim of 100% physical-robot coverage.',
       'Implemented Mecanum-wheel kinematics and STM32 velocity PID, and built a layered ROS architecture with encoder/IMU/vision EKF localization and TF frames.'
     ]}
  ],
  papers:[
    {name:'Complete Coverage Path Planning Based on Multi-Dimensional Utility Decision-Making in Unstructured Environments',venue:'Chinese-language manuscript',status:'Submitted / under consideration'},
    {name:'Evidence-Graded Evaluation of Learned Planner Selection in Complete Coverage Path Planning',venue:'Neurocomputing',status:'Under review'}
  ],
  honors:['National First Prize · Global Campus AI Algorithm Elite Competition','National Third Prize · 19th Challenge Cup','National Second Prize · iCAN Competition','National Inspirational Scholarship (2023–2025)'],
  noteTitle:'Research Notes',noteDesc:'Notes on paper reading, model reimplementation, 3D geometry, and robotics experiments are being curated. Unreviewed internal reports will not be published.',
  projectLabels:{overview:'Overview',details:'Contributions & Results',role:'Role',period:'Period',status:'Scope & limitations',paper:'Related link',back:'Back to projects'},
  contactDesc:'For research collaborations or internship opportunities, please contact me by email.',copyright:'Built using Astro and Astrofy-inspired design.'
}
} as const;
export const siteEmail = 'shu_jianguo@qq.com';
export const githubURL = 'https://github.com/shujianguosjg-dot';
