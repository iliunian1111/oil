const termsData = [
  {
    "name": "井",
    "english": "Well",
    "description": "以勘探开发石油和天然气为目的的，在地层中钻出的具有一定深度的圆柱形孔眼。"
  },
  {
    "name": "井口",
    "english": "Wellhead",
    "description": "井的开口端。"
  },
  {
    "name": "井底",
    "english": "Hole Bottom",
    "description": "井的底端."
  },
  {
    "name": "井壁",
    "english": "Well Wall",
    "description": "井眼的圆柱形表面。"
  },
  {
    "name": "环空",
    "english": "Annulus",
    "description": "井中下有管柱时，井壁与管柱或管柱与管柱之间的圆环形截面的柱状空间。"
  },
  {
    "name": "井的类别",
    "english": "Well Type",
    "description": "井的类别"
  },
  {
    "name": "探井",
    "english": "Exploratory Well",
    "description": "指以了解地层的时代、岩性、厚度、生储盖的组合和区域地质构造，地质剖面局部构造为目的；"
  },
  {
    "name": "直井",
    "english": "Straight Well",
    "description": "井眼轴线大体沿铅垂方向，其井斜角、井底水平位移和全角变化率均在限定范围内的井。"
  },
  {
    "name": "钻井方法",
    "english": "Drilling Method",
    "description": "用不回钻井设备、工具和工艺技术钻成一口井所用的方法。藉钻井"
  },
  {
    "name": "顿钻",
    "english": "Percussion Drilling",
    "description": "利用地面设备使钻头作铅垂方向运动，以冲击方式破碎岩石形成井眼的方法。"
  },
  {
    "name": "杆式顿钻",
    "english": "Rod Tool Drilling",
    "description": "利用钻杆连接钻头的顿钻钻井方法。"
  },
  {
    "name": "绳式顿钻",
    "english": "Cable Tool Drilling",
    "description": "利用钢丝绳连接钻头的顿钻钻井方法。"
  },
  {
    "name": "旋转钻井",
    "english": "Rotary Drilling",
    "description": "利用地面设备或井下动力钻具使钻头作旋转运动，以破碎岩石形成井眼的方法。"
  },
  {
    "name": "顶部驱动钻井",
    "english": "Top Drive Drilling",
    "description": "利用安装在水龙头部位的动力装置带动钻柱旋转的钻井方法(cid:127) 可在起下钻过程中随时恢复旋转和"
  },
  {
    "name": "井底动力钻井",
    "english": "Downhole Motor Drilling",
    "description": "利用井底动力钻具带动钻头的旋转钻井方法。"
  },
  {
    "name": "电动钻井",
    "english": "Electric Drilling",
    "description": "采用电动钻具作为井底动力钻具. 利用电力驱动井下电动钻具的旋转钻井方法。又可分为有杆电"
  },
  {
    "name": "沙漠钻井",
    "english": "Desert Drilling",
    "description": "利用适合沙漠地带作业的地面设备在沙漠地区进行的钻井。"
  },
  {
    "name": "泡沫钻井",
    "english": "Foam Drilling",
    "description": "用泡沫作为钻井流体进行的钻井。适合于低渗、低压油气层。"
  },
  {
    "name": "雾化钻井",
    "english": "Mist Drilling",
    "description": "用水和泡沫剂的混合物注入到空气流中作为钻井液进行的钻井。主要用在钻遇含水或含油砂岩中"
  },
  {
    "name": "充气钻井液钻井",
    "english": "Aerated Drilling Fluid Drilling",
    "description": "用钻井液和空气的混合物作为钻井流体进行的钻井。主要用于有大段含水砂岩，并伴随着井漏而"
  },
  {
    "name": "欠平衡压力钻井",
    "english": "Underbalanced Pressure Drilling",
    "description": null
  },
  {
    "name": "近平衡压力钻井",
    "english": "Near-Balanced Pressure Drilling",
    "description": "是指作用于井底的液柱压力略大于地层孔隙压力情况下进行的钻井."
  },
  {
    "name": "取心钻井",
    "english": "Core Drilling",
    "description": "是用机械方法将所钻地层成柱状岩样从井底取出的钻井。"
  },
  {
    "name": "工程报废井",
    "english": "Engineering Abandoned Well",
    "description": "由于钻井工程事故，无法钻达地质设计深度而报废的井。"
  },
  {
    "name": "钻井设计",
    "english": "Drilling Design",
    "description": "是钻井施工的依据，包括地质设计、工程设计、进度设计及成本设计。"
  },
  {
    "name": "单井工程设计",
    "english": "Single Well Engineering Design",
    "description": "钻井工程部门根据地质设计进行的一口井的工程设计，包括地质目的、建井周期、井身质量、安"
  },
  {
    "name": "钻井工程质",
    "english": "Drilling Engineering Quality",
    "description": "是衡量钻井工程优劣的重要指标，主要包括井身质量、取心质量和固井质量等."
  },
  {
    "name": "钻井工序",
    "english": "Drilling Process",
    "description": "指钻井工艺过程的各个组成部分。一般包括钻前准备、钻进、取心、中途测试、测井、固井和完"
  },
  {
    "name": "钻井进度",
    "english": "Drilling Progress",
    "description": "钻井施工各工序进行的先后次序和用时间表示的进展程度。"
  },
  {
    "name": "钻井条件",
    "english": "Drilling Conditions",
    "description": "影响钻井工作决策、进行和发展的各种因素。如地质、交通、通信、气候、设备、井眼、器材供"
  },
  {
    "name": "岩石的物理机械性质及可钻性",
    "english": "Physical-Mechanical Properties and Drillability of Rock",
    "description": null
  },
  {
    "name": "矿物的微硬度",
    "english": "Mineral Microhardness",
    "description": null
  },
  {
    "name": "岩石的微硬度",
    "english": "Rock Microhardness",
    "description": "组成岩石的矿物颗粒的硬度。"
  },
  {
    "name": "岩石的硬度",
    "english": "Rock Hardness",
    "description": "根据统计学原理，用微硬度计来测定的岩石硬度平均值."
  },
  {
    "name": "史氏岩石硬度",
    "english": "Shi's Rock Hardness (Shi Hardness)",
    "description": "岩：石抵抗其他物体压入其内的能力，即岩石的抗压入强度。"
  },
  {
    "name": "矿物的弹性模量",
    "english": "Mineral Elastic Modulus",
    "description": "利用史立涅尔岩石硬度计测得的岩石硬度。"
  },
  {
    "name": "岩石的弹性",
    "english": "Rock Elasticity",
    "description": "根据虎克定律，理想弹性材料在弹性范围内的正应力 S）与正应变（8）成线性比例时，比值"
  },
  {
    "name": "岩石的弹性模量",
    "english": "Rock Elastic Modulus",
    "description": "岩石的应变随着应力的解除而恢复的特性，"
  },
  {
    "name": "矿物的切变模量",
    "english": "Mineral Shear Modulus",
    "description": "在弹性范围内，岩石的正应力与其正应变的比值a"
  },
  {
    "name": "矿物和岩石的体积压缩模量",
    "english": "Bulk Compressibility Modulus of Minerals and Rocks",
    "description": "矿物在剪切应力（力 作用下会产生剪切应变 0，或称角应变），剪应力与剪切应变的比值称为"
  },
  {
    "name": "简单应力条件下岩石的强度",
    "english": "Rock Strength under Uniaxial Stress",
    "description": null
  },
  {
    "name": "岩石的抗拉伸强度",
    "english": "Rock Tensile Strength",
    "description": "单向应力作用下岩石的强度。"
  },
  {
    "name": "岩石的直接拉伸试验",
    "english": "Direct Rock Tensile Test",
    "description": "岩石试样在进行拉伸试验时，岩石被拉断时的载荷与岩样横截面积之比（5）."
  },
  {
    "name": "岩石的巴西劈裂抗拉伸试验",
    "english": "Brazilian Split Tensile Test of Rock",
    "description": null
  },
  {
    "name": "岩石的常规抗压缩强度",
    "english": "Conventional Rock Compressive Strength",
    "description": null
  },
  {
    "name": "岩石的捣碎法压缩试验",
    "english": "Crushing Compression Test for Rock",
    "description": "指岩石抵抗外力压缩的能力。在岩样上施加轴向压缩载荷直至破坏时单位面积上的载荷。"
  },
  {
    "name": "压模静压入",
    "english": "Static Indentation by Die",
    "description": null
  },
  {
    "name": "压力面",
    "english": "Pressure Face",
    "description": "压模在静态载荷的作用下压入岩石。"
  },
  {
    "name": "等剪应力球面",
    "english": "Iso-Shear Stress Spherical Surface",
    "description": "压模压入岩石时，通过压模给岩石的接触面加载，压入载荷分布于接触面上，称该接触面为压力"
  },
  {
    "name": "岩石的抗剪切强度",
    "english": "Rock Shear Strength",
    "description": "圆柱形平底压模压入岩石时，半无限球体中剪应力相等的点构成一个个的球面，称该球面为等剪"
  },
  {
    "name": "岩石的三轴强度试验",
    "english": "Triaxial Strength Test of Rock",
    "description": "指岩石抵抗剪切的能力。"
  },
  {
    "name": "岩石的常规三轴试验",
    "english": "Conventional Triaxial Test of Rock",
    "description": null
  },
  {
    "name": "岩石的真三轴试验",
    "english": "True Triaxial Test of Rock",
    "description": "在三轴高压室内，用液压使岩样四周处于三向均匀压缩应力状态下进行的纵向压缩或拉伸强度试"
  },
  {
    "name": "脆性岩石",
    "english": "Brittle Rock",
    "description": "三轴试验时，给岩样 X, Y 和 Z 三个方向施加的均布压力不等，即在三个主应力互不相等的条"
  },
  {
    "name": "岩石的塑性",
    "english": "Rock Plasticity",
    "description": "给岩石施以外载，在其破坏前不呈现明显塑性变形的岩石。"
  },
  {
    "name": "塑性岩石",
    "english": "Plastic Rock",
    "description": "岩石的应变随应力的解除而不能完全恢复的特性。"
  },
  {
    "name": "岩石的塑性变形",
    "english": "Plastic Deformation of Rock",
    "description": "在外载作用下直至破碎之前呈现明显塑性变形的岩石。"
  },
  {
    "name": "岩石的假塑性破坏",
    "english": "Pseudo-Plastic Failure of Rock",
    "description": "岩石在三轴压缩应力状态下呈塑性性质而产生的变形。岩石的塑性变形主要由组成岩石的矿物颗"
  },
  {
    "name": "岩石的塑性系数",
    "english": "Plasticity Coefficient of Rock",
    "description": null
  },
  {
    "name": "岩石的内摩擦角和内摩擦系数",
    "english": "Internal Friction Angle and Coefficient of Rock",
    "description": "指岩石破坏时所消费的总功与破坏前弹性变形功的比值。"
  },
  {
    "name": "岩石的格里菲斯脆性破坏准则",
    "english": "Griffith Theory for Brittle Failure of Rock",
    "description": "在库仑-纳维尔准则表达式（e=小十5）之中，从称为岩石的内摩擦系数，它等于该直线的斜率，并"
  },
  {
    "name": "单齿压入试验",
    "english": "Single-Tooth Penetration Test",
    "description": null
  },
  {
    "name": "破碎坑",
    "english": "Crushed Crater",
    "description": "一种用单齿切人来模拟井眼条件下钻头齿切入的基本试验。该试验能明显地看出岩石在钻头齿下"
  },
  {
    "name": "列宾捷尔效应",
    "english": "Rebinder Effect",
    "description": "岩石被破碎后离开母体而留下的坑穴。"
  },
  {
    "name": "牙轮钻头承压面积",
    "english": "Bearing Area of Roller Cone Bit",
    "description": "RebinderP.A.effect ru Pe6HH耳ep JI,A."
  },
  {
    "name": "岩石的表面破碎",
    "english": "Surface Fracture of Rock",
    "description": "牙轮钻头破碎岩石时，同时与井底岩石相接触的牙轮齿的顶面积之和。"
  },
  {
    "name": "岩石的疲劳破碎",
    "english": "Fatigue Fracture of Rock",
    "description": "指钻进过程中施加的钻压太小，其比钻压远远小于史氏岩石硬度，牙齿不能切人地层，只是在岩"
  },
  {
    "name": "岩石的体积破碎",
    "english": "Volumetric Fracture of Rock",
    "description": "钻进时比钻压小于但接近史氏岩石硬度，由于长时间研磨、刮削和冲击，使得岩石表面颗粒达到"
  },
  {
    "name": "岩石的单位体积破碎功",
    "english": "Specific Volumetric Fragmentation Work of Rock",
    "description": "当比钻压达到或超过史氏岩石硬度时，牙齿切入岩石后在冲击、刮挤和切削的作用下，岩石产生"
  },
  {
    "name": "地温级度",
    "english": "Geothermal Step (Temperature Gradient per Depth)",
    "description": "破碎单位体积的岩石所消耗的功。"
  },
  {
    "name": "岩层的水平侧向应力",
    "english": "Horizontal Lateral Stress of Rock Formation",
    "description": "1C时地层所加深的米数。"
  },
  {
    "name": "侧压系数",
    "english": "Lateral Pressure Coefficient",
    "description": "指作用在岩层水平方向上的地应力。"
  },
  {
    "name": "围压",
    "english": "Confining Pressure",
    "description": "岩层中某一点所承受的水平应力和垂直应力的比值a"
  },
  {
    "name": "各向压缩效应",
    "english": "Triaxial Compressibility Effect",
    "description": "指作用在岩石水平方向上的均匀压应力。在岩石常规三轴强度试验中，是指圆柱形岩样四周所施"
  },
  {
    "name": "有效应力",
    "english": "Effective Stress",
    "description": "随着围压的增大，岩石的强度和塑性增大的现象。"
  },
  {
    "name": "零有效应力",
    "english": "Zero Effective Stress",
    "description": "从围压中减去孔隙压力后的差值，即称为三轴应力状态下作用f 岩石上的有效应力。"
  },
  {
    "name": "岩石的宏观结构",
    "english": "Macro-Structure of Rock",
    "description": "三轴应力状态下作用于岩石上的有效应力等于零（即围压与孔隙压力的差值为零）。"
  },
  {
    "name": "岩石的不均匀性",
    "english": "Heterogeneity of Rock",
    "description": "macro—structure"
  },
  {
    "name": "岩石的不均匀性",
    "english": "Rock Heterogeneity",
    "description": "由于岩石内部各处矿物组成和矿物颗粒胶结情况的差异，导致其物理机械性质随空间变化而异的"
  },
  {
    "name": "岩石的各向异性",
    "english": "Rock Anisotropy",
    "description": "岩石在垂直于和平行于层理方向上的物理机械性质不相同的特性."
  },
  {
    "name": "岩石的可钻性",
    "english": "Rock Drillability",
    "description": "评价岩石被钻难易程度的综合性指标。"
  },
  {
    "name": "微型钻头",
    "english": "Micro Drill Bit",
    "description": "•种钻头。它由…组为8片的零号修整砂轮用的圆形刀片，间隔以直径为"
  },
  {
    "name": "微型钻头刀片齿磨损量",
    "english": "Micro Drill Bit Blade Tooth Wear",
    "description": "微型钻头在室内钻进试验时，在规定试验条件下，微型钻头刀片齿的磨损高度。"
  },
  {
    "name": "岩石研磨性",
    "english": "Rock Abrasiveness",
    "description": "岩石磨损与其接触并运动的物体的能力。"
  },
  {
    "name": "岩石的渗透率",
    "english": "Rock Permeability",
    "description": "在一定压差作用下,.岩石允许流体通过的能力。"
  },
  {
    "name": "钻前工程",
    "english": "Pre-Drilling Engineering",
    "description": null
  },
  {
    "name": "定井位",
    "english": "Well Location Determination",
    "description": null
  },
  {
    "name": "选线",
    "english": "Route Selection",
    "description": "选取通往井场的路线。"
  },
  {
    "name": "井场",
    "english": "Drilling Site",
    "description": "钻井施工必需的作业场地。"
  },
  {
    "name": "井场布置",
    "english": "Drilling Site Layout",
    "description": "根据井位所处自然环境、设备类型和技术要求，布置井场及钻井设备。"
  },
  {
    "name": "设备安装",
    "english": "Equipment Installation",
    "description": "对井场设备进行就位、校正、固定和试运转等项工作。"
  },
  {
    "name": "圆井",
    "english": "Round Well",
    "description": "为便于安装井控装置开挖的圆或方形井。"
  },
  {
    "name": "泥浆罐",
    "english": "Mud Tank",
    "description": "供配制、贮存、循环钻井液的铁罐，包括上水罐、循环罐或沉淀罐。"
  },
  {
    "name": "钻机基础",
    "english": "Drilling Rig Foundation",
    "description": "将钻机载荷传递至地基上的构筑物。"
  },
  {
    "name": "钻机基础设计",
    "english": "Drilling Rig Foundation Design",
    "description": "根据钻井工艺要求，确定钻机基础类型、结构尺寸及施工技术要求。"
  },
  {
    "name": "基础浇筑",
    "english": "Foundation Pouring",
    "description": "现浇基础的制做作业。"
  },
  {
    "name": "挖基坑",
    "english": "Foundation Pit Excavation",
    "description": "在基坑界线范围内，按技术要求开挖攀坑的作业。"
  },
  {
    "name": "填石灌浆",
    "english": "Stone Filling and Grouting",
    "description": null
  },
  {
    "name": "基础找平",
    "english": "Foundation Leveling",
    "description": "对同一组基础表面进行测量找水平的作业。"
  },
  {
    "name": "基础养护",
    "english": "Foundation Curing",
    "description": "使已密实成型的混凝土正常完成水泥的水化反应，所采取的工艺措施。"
  },
  {
    "name": "塔形井架",
    "english": "Tower Derrick",
    "description": "横截面为正方形或矩形的四棱截锥形空间料架结构的井架。一般由许多单一构件用螺栓连接组"
  },
  {
    "name": "前开口式井架",
    "english": "Front-Opening Derrick",
    "description": "指前扇敞开或大部分敞开，截面为口形或包括部分矩形的空间杆架结构的井架。一般由许多单"
  },
  {
    "name": "桅形井架",
    "english": "Mast Derrick",
    "description": "由框架结构或管柱式大腿组成整体的或分段的焊接结构井架，可在井场地面组装，整体起升，分"
  },
  {
    "name": "井架结构参数",
    "english": "Derrick Structural Parameters",
    "description": "井架的整体结构尺寸。"
  },
  {
    "name": "井架底尺寸",
    "english": "Derrick Base Dimensions",
    "description": "沿底板底面的井架各相邻大腿中心轴线之间的水平距离。"
  },
  {
    "name": "井架上底尺寸",
    "english": "Derrick Upper Base Dimensions",
    "description": "沿天车梁底面的井架各相邻大腿中心轴线之间的水平距离。"
  },
  {
    "name": "二层台公称高度",
    "english": "Second Platform Nominal Height",
    "description": "从井架的大腿底板、底面到二层台底面的垂直距离。"
  },
  {
    "name": "井架构件",
    "english": "Derrick Components",
    "description": "井架钢结构的组成件。"
  },
  {
    "name": "底板",
    "english": "Base Plate",
    "description": "固定在井架大腿底面，用于支承井架、连接底座的构件。"
  },
  {
    "name": "横杆",
    "english": "Crossbar",
    "description": "井架结构中水乎构件，"
  },
  {
    "name": "斜杆",
    "english": "Diagonal Bar",
    "description": "井架结构中倾斜构件。"
  },
  {
    "name": "联接板",
    "english": "Connecting Plate",
    "description": "由钢板模压而成的直角状大腿连接件，分为内联接板和外联接板。"
  },
  {
    "name": "操作台",
    "english": "Operating Platform",
    "description": "供井架工配合进行起下钻操作的作业设施。通常在井架上有两三个不同高度的安装位置，以适应"
  },
  {
    "name": "指梁",
    "english": "Finger Beam",
    "description": "设在井架二层台上，用以支靠立根盒中钻柱立根顶部的若干根指状悬臂梁。"
  },
  {
    "name": "三层台",
    "english": "Third Platform",
    "description": "位于二层台以上，支承操作台的工作平台."
  },
  {
    "name": "天车台人字架",
    "english": "Crown Block A-Frame",
    "description": "装在井架大腿顶部，用于安装或拆卸天车的人字形支架。"
  },
  {
    "name": "立管台",
    "english": "Standpipe Platform",
    "description": "供拆装钻井水龙带的工作平台。"
  },
  {
    "name": "井架绷绳",
    "english": "Derrick Guy Rope",
    "description": "防止井架倾倒的钢丝绳，一般有四至八根一从井架顶部和二层台与地表成一定角度固定于地面的"
  },
  {
    "name": "扶梯",
    "english": "Ladder",
    "description": "供作业人员上下井架的攀登设施. 由梯子体、梯子平台. 栏杆组成。"
  },
  {
    "name": "钻台",
    "english": "Drilling Platform",
    "description": "装于井架底座上，作为钻工的作业场所."
  },
  {
    "name": "挡风墙",
    "english": "Windbreak Wall",
    "description": "设置在钻井操作场所的挡风设施。"
  },
  {
    "name": "塔形井架安装",
    "english": "Tower Derrick Installation",
    "description": "按技术要求，在高空将井架零部件安装成整体的作业."
  },
  {
    "name": "运井架",
    "english": "Derrick Transportation",
    "description": null
  },
  {
    "name": "整理井架",
    "english": "Derrick Arrangement",
    "description": "归类整理井架拆散件，按技术要求. 在地面初步组装成适广高空吊装的组合件，并放在适宜的起"
  },
  {
    "name": "安装索具",
    "english": "Rigging Installation",
    "description": null
  },
  {
    "name": "吊扒杆",
    "english": "Lifting Gin Pole",
    "description": "将扒杆吊装在井架内第一作业位置上的作业。它是为使用扒杆拆装井架作准备。"
  },
  {
    "name": "升扒杆",
    "english": "Raising Gin Pole",
    "description": "按照作业规程要求，将扒杆从 •个作业位置升至上一个作业位置的作业。"
  },
  {
    "name": "降扒杆",
    "english": "Lowering Gin Pole",
    "description": "按照作业规程要求，将扒杆从 个作业位置降至下 一个作业位置的作业。"
  },
  {
    "name": "放扒杆",
    "english": "Releasing Gin Pole",
    "description": "按照作业规程要求，将扒杆从最后…个作业位置放至地面的作业。"
  },
  {
    "name": "变幅",
    "english": "Boom Adjustment",
    "description": "纵向调节扒杆吊臂角度，变化吊装半径的作业。"
  },
  {
    "name": "对吊",
    "english": "Counterweight Lifting",
    "description": "扒杆两吊臂同时对称吊起质量相等或相近的井架部件。"
  },
  {
    "name": "放天车",
    "english": "Releasing Crown Block",
    "description": "拆放天车的作业。"
  },
  {
    "name": "高空操作手",
    "english": "Aerial Operator",
    "description": "在高空进行拆装井架的作业人员。"
  },
  {
    "name": "第一操作手",
    "english": "First Operator",
    "description": "位于最高作业高度上，装卸索具、拆装井架的作业人员。"
  },
  {
    "name": "第二操作手",
    "english": "Second Operator",
    "description": "位于第二作业高度上，拆装井架的作业人员。"
  },
  {
    "name": "第三操作手",
    "english": "Third Operator",
    "description": "松紧井架连接螺栓的作业人员。"
  },
  {
    "name": "组装井架",
    "english": "Derrick Assembly",
    "description": "按照技术要求，井架分成数段在场地上水平组装成整体。"
  },
  {
    "name": "起升井架",
    "english": "Derrick Raising",
    "description": "利用自身配备动力，将井架由水平位置起升至工作位置的作业。"
  },
  {
    "name": "起升绳",
    "english": "Hoisting Rope",
    "description": "井架水平安装后，整体起立用的钢丝绳。钻井时不用."
  },
  {
    "name": "井架缓冲器",
    "english": "Derrick Buffer",
    "description": "使井架平稳竖立并缓慢接触支撑物的气缸或液压缸缓冲装置。"
  },
  {
    "name": "钻机整体拖运",
    "english": "Drilling Rig Skidding",
    "description": "钻机主要部件基本上不拆开，被整体拖运到新的井位上。"
  },
  {
    "name": "校正井架",
    "english": "Derrick Alignment",
    "description": "按技术要求调整井架铅垂中心线与转盘中心重合的作业。"
  },
  {
    "name": "钻井队野营房",
    "english": "Drilling Crew Camp House",
    "description": "用于石油天然气勘探开发钻井队生产和生活活动式房（室）设施总称."
  },
  {
    "name": "扒杆",
    "english": "Gin Pole",
    "description": "用以拆装塔形井架的管柱式起重工具."
  },
  {
    "name": "单扒杆",
    "english": "Single Gin Pole",
    "description": null
  },
  {
    "name": "悬转扒杆",
    "english": "Swivel Gin Pole",
    "description": null
  },
  {
    "name": "吊臂",
    "english": "Boom",
    "description": "用来支承起重滑轮的悬臂梁。"
  },
  {
    "name": "主学I杆",
    "english": "Main Support Rod (推测为\"主支撑杆\")",
    "description": "扒杆结构中主要受力杆件. 由顶节、中节、底节装配而成。"
  },
  {
    "name": "上撑杆",
    "english": "Upper Support Rod",
    "description": "支承主扒杆的杆件。"
  },
  {
    "name": "下撑杆",
    "english": "Lower Support Rod",
    "description": "扶正, 稳定主扒杆的杆件."
  },
  {
    "name": "辅助撑杆",
    "english": "Auxiliary Support Rod",
    "description": "扶正、稳定下撑杆、主拱杆的辅助杆件。"
  },
  {
    "name": "底部转座",
    "english": "Bottom Swivel",
    "description": "在扒杆底部，固定底滑轮的旋转装置。"
  },
  {
    "name": "中部转座",
    "english": "Middle Swivel",
    "description": "支撑扒杆吊臂的旋转装置。"
  },
  {
    "name": "顶部转座",
    "english": "Top Swivel",
    "description": "位于扒杆顶部，要有多个滑轮的可旋转装置。"
  },
  {
    "name": "座板",
    "english": "Seat Plate",
    "description": "固定在撑杆下端的支承板。"
  },
  {
    "name": "变幅滑轮",
    "english": "Boom Sheave",
    "description": "在吊臂顶部，配合吊臂变幅的单滑轮。"
  },
  {
    "name": "底滑轮",
    "english": "Bottom Sheave",
    "description": "安装在主扒杆底部转座上的单滑轮。"
  },
  {
    "name": "起重钢丝绳",
    "english": "Lifting Wire Rope",
    "description": "用来承受提升载荷的钢丝绳。"
  },
  {
    "name": "变幅钢丝绳",
    "english": "Boom Wire Rope",
    "description": "控制吊臂变幅的钢丝绳。"
  },
  {
    "name": "尖柄吊扳手",
    "english": "Pointed-End Lifting Wrench",
    "description": "用以拆装塔形井架连接螺栓的专用工具。"
  },
  {
    "name": "钻头选择和使用",
    "english": "Drill Bit Selection and Use",
    "description": null
  },
  {
    "name": "钻头选型",
    "english": "Drill Bit Selection",
    "description": null
  },
  {
    "name": "钻头检查",
    "english": "Drill Bit Inspection",
    "description": "为保证 钻头的型号、尺寸、质量等符合要求，在人井前进行的一些检查。"
  },
  {
    "name": "钻头使用寿命",
    "english": "Drill Bit Service Life",
    "description": "钻头在切削元件或轴承失效之前在井下正常工作的时间。"
  },
  {
    "name": "钻头合理起钻时间",
    "english": "Reasonable Bit Pull-Out Time",
    "description": "在钻头使用寿命内，按钻井技术经济指标最优为标准确定的钻头起钻时间。"
  },
  {
    "name": "钻头过度使用",
    "english": "Excessive Bit Usage",
    "description": "钻头在超过合理使用时间后继续使用。"
  },
  {
    "name": "钻头正常磨损",
    "english": "Normal Bit Wear",
    "description": "指钻头在正常的钻进过程中，因岩石的研磨作用而产生的切削元件、钻头外径的磨损。牙轮钻头"
  },
  {
    "name": "钻头异常磨损",
    "english": "Abnormal Bit Wear",
    "description": "因选型和使用不当或井下有落物等而导致钻头磨损过快或先期损坏。"
  },
  {
    "name": "钻头过度磨损",
    "english": "Excessive Bit Wear (原\"磨鬼\"推测为\"磨损\"笔误)",
    "description": "由于过度使用导致的钻头严重磨损。"
  },
  {
    "name": "牙轮钻头轴承失效",
    "english": "Roller Cone Bit Bearing Failure",
    "description": "牙轮钻头轴承不能正常工作。"
  },
  {
    "name": "钻头磨损分析",
    "english": "Bit Wear Analysis",
    "description": "对使用后的钻头磨损情况进行分析。是对钻头的选择和使用进行评价的基础。牙轮钻头是通过对"
  },
  {
    "name": "牙齿的磨损分级",
    "english": "Tooth Wear Classification",
    "description": "对牙轮钻头牙齿的磨损状况的一种划分。分为 8级。铳齿以齿高相对磨损高度 G 来确定。孰<"
  },
  {
    "name": "轴承磨损分级",
    "english": "Bearing Wear Classification",
    "description": "对牙轮钻头轴承的磨损状况的一种划分。分为8级。以钻头使用时间与轴承寿命（小时）之比Z来"
  },
  {
    "name": "钻头直径磨损",
    "english": "Bit Diameter Wear",
    "description": "直接以钻头直径磨损的毫米数来表示。零表示直径没有减少，磨损量在两个相邻整数之间取数值"
  },
  {
    "name": "钻头磨损特征",
    "english": "Bit Wear Characteristics",
    "description": "使用过的钻头与新钻头相比，在外观上的明显变化。"
  },
  {
    "name": "牙齿折断",
    "english": "Tooth Breakage",
    "description": "牙齿断裂或崩碎，齿根仍留在牙轮基体上。"
  },
  {
    "name": "牙齿脱落",
    "english": "Tooth Loss",
    "description": "固齿失效，整个镶齿从牙轮体齿孔内掉落。"
  },
  {
    "name": "牙齿磨损",
    "english": "Tooth Wear",
    "description": "牙齿因地层的研磨作用而导致高度减少或齿形变化。"
  },
  {
    "name": "牙轮掉落",
    "english": "Cone Drop",
    "description": "—"
  },
  {
    "name": "牙轮破裂",
    "english": "Cone Cracking",
    "description": "牙轮体部分破碎、断落或出现裂纹。"
  },
  {
    "name": "牙轮互咬",
    "english": "Cone Interference",
    "description": "牙轮间发生接触，不能灵活转动。"
  },
  {
    "name": "牙轮冲蚀",
    "english": "Cone Erosion",
    "description": null
  },
  {
    "name": "牙轮旷动",
    "english": "Cone Looseness",
    "description": "轴承因磨损而间隙增大引起牙轮转动不平稳。"
  },
  {
    "name": "牙轮卡死",
    "english": "Cone Locking",
    "description": "因轴承失效等导致牙轮被卡住而无法自转。"
  },
  {
    "name": "轴承密封失效",
    "english": "Bearing Seal Failure",
    "description": "轴承密封系续损坏，钻井液进人轴承腔室。"
  },
  {
    "name": "钻头直径磨小",
    "english": "Bit Diameter Wear",
    "description": "因井壁或落物对钻头外缘的研磨作用导致钻头直径减小。"
  },
  {
    "name": "喷嘴脱落",
    "english": "Nozzle Loss",
    "description": null
  },
  {
    "name": "水眼螺纹刺坏",
    "english": "Water Course Thread Puncture",
    "description": null
  },
  {
    "name": "喷嘴刺坏",
    "english": "Nozzle Erosion",
    "description": "喷嘴本体被钻井液冲蚀损坏。"
  },
  {
    "name": "喷嘴堵塞",
    "english": "Nozzle Plugging",
    "description": "喷嘴被岩屑或异物堵住，钻井液无法通过。"
  },
  {
    "name": "巴掌断落",
    "english": "Breakage of Shirt Tail",
    "description": "巴掌断裂后和牙轮一起掉落井内。"
  },
  {
    "name": "巴掌破裂",
    "english": "Crack of Shirt Tail",
    "description": "巴掌体发生部分破碎或出现裂纹。"
  },
  {
    "name": "钻头泥包",
    "english": "Bit Balling",
    "description": "钻头被岩屑、钻井液等掺混产一起的糊状物紧紧包住。"
  },
  {
    "name": "井底落物损坏",
    "english": "Downhole Foreign Object Damage",
    "description": "因井底落物造成的钻头损坏。"
  },
  {
    "name": "钻具",
    "english": "Drilling Tool",
    "description": "井下钻井工具的简称。一般来说，它是指方钻杆、钻杆、钻铤、接头、稳定器、井眼扩大器、减"
  },
  {
    "name": "铝合金钻杆",
    "english": "Aluminum Alloy Drill Pipe",
    "description": "以铝为主的多种合金制成的钻杆。主要用于深井钻井。"
  },
  {
    "name": "加重钻杆（厚壁钻杆）",
    "english": "Heavy Weight Drill Pipe (HWDP)",
    "description": "用高级合金钢制成的壁厚较大的钻杆，其两端有超长的外加厚接头，中间有部分外加厚。"
  },
  {
    "name": "钻铤",
    "english": "Drill Collar",
    "description": "用高级合金钢制成的厚壁无缝钢管。两端有连接螺纹，其壁厚一般为钻杆的4~6倍。主要用作"
  },
  {
    "name": "方钻铤",
    "english": "Square Drill Collar",
    "description": "断面外形为方形的钻铤。其刚度大，是一种防斜钻具，"
  },
  {
    "name": "钻杆接头",
    "english": "Tool Joint",
    "description": "钻杆管体两端的接头，用于连接、保护钻杆0 又分为内平式接头、贯眼式接头和正规式接头。"
  },
  {
    "name": "方钻杆保护接头",
    "english": "Kelly Saver Sub",
    "description": "保护方钻杆螺纹的接头。"
  },
  {
    "name": "钻柱",
    "english": "Drill String",
    "description": "是指自水龙头以下钻头以上钻具管串的总称。由方钻杆、钻杆、钻铤、接头、稳定器等钻具所组"
  },
  {
    "name": "满眼钻具",
    "english": "Full Gauge Bottom Hole Assembly (BHA)",
    "description": "由外在接近 户钻头苴径的多个稳定器和大尺寸钻铤组成的下部钻具组合。用于防斜稳斜。"
  },
  {
    "name": "塔式钻具",
    "english": "Tapered Bottom Hole Assembly (BHA)",
    "description": "由直径不同的几种钻铤组成的、上小下大的下部钻具组合，用于防止井斜。"
  },
  {
    "name": "钟摆钻具",
    "english": "Pendulum Bottom Hole Assembly (BHA)",
    "description": "在已斜井眼中，钻头以上，切点以下的一段钻铤犹如一个“钟摆”，钻头在这段钻铤的重力的横向"
  },
  {
    "name": "钻柱压曲",
    "english": "Drill String Buckling",
    "description": "当钻压达到一定数值时，下部钻柱丧失稳定平衡而发生弯曲。"
  },
  {
    "name": "切点",
    "english": "Tangent Point",
    "description": "钻柱弯曲时和井壁接触的点称为切点。"
  },
  {
    "name": "半波长度",
    "english": "Half-Wave Length",
    "description": "钻柱在轴向力和离心力的联合作用下，发生弯曲，若把此弯曲看成为变节距的平面螺旋弯曲，且"
  },
  {
    "name": "临界钻压",
    "english": "Critical Weight on Bit (WOB)",
    "description": "使一定尺寸下部钻柱产生压曲的最小钻压。"
  },
  {
    "name": "变节距空间螺旋弯曲曲线",
    "english": "Variable Pitch Helical Buckling Curve",
    "description": "钻柱在轴向力、离心力和扭矩的联合作用下发生弯曲，其轴线呈空间螺旋状且节距在井底最小，"
  },
  {
    "name": "钻柱的扭转振动",
    "english": "Torsional Vibration of Drill String",
    "description": "当钻遇软硬交错地层、断层和裂缝等地层时，由于井底对钻头旋转的阻力不断变化所引起的钻柱"
  },
  {
    "name": "钻柱的纵向振动",
    "english": "Longitudinal Vibration of Drill String",
    "description": "钻进时，钻头的转动引起牙轮上与岩石接触的牙齿不断改变，钻头重心发生上下变化，从而引起"
  },
  {
    "name": "钻柱的旋转运动",
    "english": "Rotational Motion of Drill String",
    "description": "钻柱绕轴线作旋转."
  },
  {
    "name": "钻柱自转",
    "english": "Drill String Self-Rotation",
    "description": "钻柱绕自身轴线延转。"
  },
  {
    "name": "钻柱的复合旋转",
    "english": "Combined Rotation of Drill String",
    "description": null
  },
  {
    "name": "钻柱受力分析",
    "english": "Stress Analysis of Drill String",
    "description": "指对钻柱的各部位所受的力进行分析。"
  },
  {
    "name": "钻柱拉应力",
    "english": "Tensile Stress of Drill String",
    "description": "即零轴向应力截面以上钻柱所受的应力。"
  },
  {
    "name": "钻柱压应力",
    "english": "Compressive Stress of Drill String",
    "description": "即零轴向应力截面以下钻柱所受的应力。"
  },
  {
    "name": "钻柱剪应力",
    "english": "Shear Stress of Drill String",
    "description": "在钻进时，因旋转作用而在钻柱各个截面上产生的剪应力。"
  },
  {
    "name": "钻柱外挤压力",
    "english": "External Collapse Pressure of Drill String",
    "description": "钻柱因管外与管内液柱压差作用下对钻柱产生的外挤压力。"
  },
  {
    "name": "浮力系数法",
    "english": "Buoyancy Factor Method",
    "description": "钻柱在液体中的重力等于钻柱在空气中的重力乘以浮力减轻系数，这种计算钻柱轴向载荷的方法"
  },
  {
    "name": "浮力减轻系数",
    "english": "Buoyancy Reduction Factor",
    "description": "浮力系数法中的一个计算系数，其公式为："
  },
  {
    "name": "钻柱的工作状态",
    "english": "Operational State of Drill String",
    "description": "在一定工作条件下，不同受力情况的钻柱形态。"
  },
  {
    "name": "钻柱静拉设计",
    "english": "Static Tension Design of Drill String",
    "description": "按最大允许静拉载荷进行的钻柱强度设计。"
  },
  {
    "name": "安全系数法",
    "english": "Safety Factor Method",
    "description": "为了保证钻柱的工作安全，钻柱设计时通过采用安全系数来考虑起下钻的动载及其他力的作用。"
  },
  {
    "name": "设计系数法",
    "english": "Design Factor Method",
    "description": "为了防止卡瓦挤毁钻杆，钻杆拉伸载荷应受到限制，即屈服强度与拉伸应力的比值不能小于某一"
  },
  {
    "name": "拉力余量法",
    "english": "Tension Margin Method",
    "description": "在钻柱设计中选择的计算静拉载荷应小于最大允许静拉载荷一个合适的数值的钻柱设计方法。"
  },
  {
    "name": "钻杆允许下深",
    "english": "Maximum Allowable Depth for Drill Pipe",
    "description": "钻杆在拉伸强度条件限制下可以下入井内的最大深度。"
  },
  {
    "name": "低扭矩面",
    "english": "Low Torque Surface",
    "description": "即增大钻铤内螺纹的链孔直径，减小台肩面受压面积，以便产生足够的弹性压缩。这个面称为低"
  },
  {
    "name": "螺纹磷化",
    "english": "Thread Phosphating",
    "description": "在接头螺纹表面形成一层很薄的磷化铁的薄膜。"
  },
  {
    "name": "阶梯内孔结构",
    "english": "Stepped Bore Structure",
    "description": "指在钻铤的本体部分用较大的内径，而在外螺纹部分用较小的内径的结构。这样可相对增大容易"
  },
  {
    "name": "最佳上紧扭矩",
    "english": "Optimal Make-Up Torque",
    "description": "既可保证台肩面有足够的弹性压缩量，又可防止外螺纹屈服或内螺纹膨胀的扭矩。"
  },
  {
    "name": "钻铤连接螺纹弯曲强度比值",
    "english": "Bending Strength Ratio of Drill Collar Thread",
    "description": "是指相当于外螺纹端部处的内螺纹截面的抗弯截面系数与距台肩19.05mm 处外螺纹截面的抗弯"
  },
  {
    "name": "钻杆表面缺陷",
    "english": "Surface Defects of Drill Pipe",
    "description": "指钻杆表面的伤痕裂纹。"
  },
  {
    "name": "胶皮护箍细槽",
    "english": "Rubber Protector Groove",
    "description": "胶皮护箍顶部处钻杆上产生的圆周细槽。"
  },
  {
    "name": "大钳伤痕",
    "english": "Tong Marks",
    "description": "起下钻时因大钳咬住钻杆本体而留下的牙痕。"
  },
  {
    "name": "卡瓦伤痕",
    "english": "Slip Marks",
    "description": "因全部钻柱载荷由部分卡瓦牙承受而在钻杆上留下的危险伤痕。"
  },
  {
    "name": "地层和井内金属碎屑的切割伤痕",
    "english": "Cutting Marks from Formation and Downhole Metal Debris",
    "description": "钻井中钻杆旋转时由坚硬地层或挤入井壁的金属碎块在钻杆上刻下的伤痕。"
  },
  {
    "name": "井下三器",
    "english": "Downhole Trio Tools (Stabilizer, Shock Absorber, Jar)",
    "description": "指稳定器、减振器和震击器。"
  },
  {
    "name": "稳定器",
    "english": "Stabilizer",
    "description": "一种中间局部外径加大、具有控制稳定钻具轴线作用的下部钻具组合的工具。结构上分为直、螺"
  },
  {
    "name": "减振器",
    "english": "Shock Absorber",
    "description": "--种安装在钻柱上的、能吸收来自井底产生的垂直和旋转振动的工具。"
  },
  {
    "name": "震击器",
    "english": "Jar",
    "description": "能产生向上或向下冲击震动的工具。"
  },
  {
    "name": "井眼扩大器",
    "english": "Hole Opener",
    "description": "扩大井眼的井下工具。"
  },
  {
    "name": "井口工具",
    "english": "Wellhead Tools",
    "description": null
  },
  {
    "name": "大钳（吊钳）",
    "english": "Tong (Elevator)",
    "description": null
  },
  {
    "name": "吊",
    "english": "Elevator",
    "description": "用来扣在钻杆接头台肩处以悬持、提升、下入钻柱或用来扣在接箍处以下人套管的井口工具。分"
  },
  {
    "name": "卡瓦",
    "english": "Slips",
    "description": "起下钻柱的一种工具。用于在起下钻时将钻杆或钻铤卡在方补心的斜孔内。"
  },
  {
    "name": "安全卡瓦",
    "english": "Safety Slips",
    "description": "起下钻铤的一种工具. 用尸在起下钻铤时防止钻铤滑落。 (cid:127)"
  },
  {
    "name": "提升短节",
    "english": "Lifting Nipple",
    "description": "—"
  },
  {
    "name": "钻头装卸器",
    "english": "Bit Handling Tool",
    "description": "专门用于在井口旋接和卸开钻头的工具。"
  },
  {
    "name": "旋接器",
    "english": "Spinning Wrench",
    "description": "专门用来旋接钻杆螺纹的工具。"
  },
  {
    "name": "转盘扭矩表",
    "english": "Rotary Table Torque Gauge",
    "description": "测量并显示转盘扭矩大小的仪表。"
  },
  {
    "name": "多叁数仪",
    "english": "Multi-Parameter Monitoring Device",
    "description": "能同时测量、显示、并记录多种钻井参数的仪器。"
  },
  {
    "name": "综合录井仪",
    "english": "Integrated Logging Unit",
    "description": "在钻进中自动采集钻进参数，钻井液性能、气测录井和色谱分析，并通过计算机联机处理后，直"
  },
  {
    "name": "钻进工艺",
    "english": "Drilling Process",
    "description": null
  },
  {
    "name": "钻进",
    "english": "Drilling",
    "description": null
  },
  {
    "name": "钻进技术",
    "english": "Drilling Technology",
    "description": "在钻进施工过程中涉及到与钻进速度和井身质量有关的各种技术的总称."
  },
  {
    "name": "钻进参数",
    "english": "Drilling Parameters",
    "description": "是指钻进过程中可控制的参数，主要包括钻压、转速、钻井液性能、流量及其他水力参数。"
  },
  {
    "name": "钻压",
    "english": "Weight on Bit (WOB)",
    "description": "钻进时施加于钻头上的沿井眼前进方向上的力。"
  },
  {
    "name": "单位钻头直径钻压",
    "english": "Weight on Bit per Unit Diameter",
    "description": null
  },
  {
    "name": "比钻压",
    "english": "Specific Weight on Bit",
    "description": "钻进时施加于钻头与井底单位接触面积上的力。通常以千牛每平方厘米为单位。"
  },
  {
    "name": "悬重和钻重",
    "english": "Hook Load and Drill String Weight",
    "description": null
  },
  {
    "name": "大钩载荷",
    "english": "Hook Load",
    "description": null
  },
  {
    "name": "转速",
    "english": "Rotary Speed (RPM)",
    "description": "指钻头的旋转速度，通常以转每分钟为单位。"
  },
  {
    "name": "流量",
    "english": "Flow Rate",
    "description": "单位时间内通过泵的排出口的液体量。通常以升每秒为单位。"
  },
  {
    "name": "钻进扭矩（瞬时）",
    "english": "Instantaneous Drilling Torque",
    "description": "钻进时钻柱（方钻杆）在某一瞬时所受的扭矩。"
  },
  {
    "name": "钻进最大扭矩",
    "english": "Maximum Drilling Torque",
    "description": "钻进时钻柱（方钻杆）所受的最大扭矩。"
  },
  {
    "name": "稳定力",
    "english": "Stabilizing Force",
    "description": "钻柱内外作用不同液压时，如在轴向引起的是拉伸应变，可以把这轴向拉应变看作是由一虚轴向"
  },
  {
    "name": "开钻",
    "english": "Spudding",
    "description": "指下人导管或各层套管后第一只钻 钻进的统称，并依次称为第一次开钻，'第二次开钻……"
  },
  {
    "name": "完钻",
    "english": "Well Completion",
    "description": "指全井钻进阶段的结束。"
  },
  {
    "name": "送钻",
    "english": "Feeding the Drill String",
    "description": null
  },
  {
    "name": "机械钻速",
    "english": "Rate of Penetration (ROP)",
    "description": "钻头在单位时间内钻进的长度。通常以米每小时为单位。"
  },
  {
    "name": "行程钻速",
    "english": "Trip Speed",
    "description": "钻头在单位行程时间（包括起下钻和纯钻进时间）内钻进的长度。通常以米每小时为单位。"
  },
  {
    "name": "钻时",
    "english": "Drilling Time",
    "description": "钻进单位进尺所用的时间。"
  },
  {
    "name": "划眼",
    "english": "Reaming",
    "description": "在已钻井眼内为了修整井壁，清除附在井壁上的杂物，使井眼畅通无阻，边循环边旋转下放或上"
  },
  {
    "name": "倒划限",
    "english": "Back Reaming (可能为\"倒划眼\"的笔误)",
    "description": "起钻遇阻时，为了清除附在井整上的障碍物，使井眼畅通无阻，边循环边旋转上提钻柱的过程。"
  },
  {
    "name": "蹩钻",
    "english": "Bit Sticking",
    "description": "在钻进中钻头所受力矩不均，转盘转动异常的现象。"
  },
  {
    "name": "跳钻",
    "english": "Bit Bouncing",
    "description": "钻进中钻头在井底工作不平稳使钻柱产生明显纵向振动的现象。"
  },
  {
    "name": "试钻",
    "english": "Test Drilling",
    "description": "是指逐渐启动转盘以微小钻压和低转速钻进。用于处理落物事故后的首次恢复钻进和试验新工艺"
  },
  {
    "name": "打倒车",
    "english": "Back Reaming",
    "description": "反向旋转钻柱以解除卡钻或清理井眼。"
  },
  {
    "name": "通井",
    "english": "Wellbore Cleaning",
    "description": "用钻具或专用工具清除井内岩屑和堵塞物。"
  },
  {
    "name": "放空",
    "english": "Pressure Release / Emptying",
    "description": "释放井内压力或排空钻井液，防止井喷或井漏。"
  },
  {
    "name": "纠斜",
    "english": "Wellbore Straightening",
    "description": "调整钻具组合或参数以纠正井眼轨迹偏移。"
  },
  {
    "name": "钻水泥塞",
    "english": "Cement Plug Drilling",
    "description": "钻穿固井后残留的水泥塞，恢复井眼通道。"
  },
  {
    "name": "钻开油气层",
    "english": "Penetrating Reservoir",
    "description": "钻穿储层顶界，进入油气产层的操作。"
  },
  {
    "name": "缩径",
    "english": "Hole Tightening",
    "description": "井眼直径因岩层膨胀或泥饼增厚而缩小。"
  },
  {
    "name": "井径扩大",
    "english": "Hole Enlargement",
    "description": "井眼直径因冲蚀或坍塌而增大。"
  },
  {
    "name": "单根",
    "english": "Single Joint",
    "description": "一根标准长度的钻杆（通常为9.5米）。"
  },
  {
    "name": "双根",
    "english": "Double Joint",
    "description": "两根钻杆连接后的组合长度。"
  },
  {
    "name": "立根",
    "english": "Stand",
    "description": "三根钻杆连接后竖立在井架内的组合。"
  },
  {
    "name": "替根",
    "english": "Pipe Substitution",
    "description": "更换钻柱中的特定钻杆或工具。"
  },
  {
    "name": "吊单根",
    "english": "Single Joint Handling",
    "description": "用吊卡单独起下钻杆的操作。"
  },
  {
    "name": "接单根",
    "english": "Adding a Joint",
    "description": "在钻进过程中连接一根新钻杆。"
  },
  {
    "name": "起下钻",
    "english": "Trip in/Out",
    "description": "将钻柱全部或部分提出井眼再下入的操作。"
  },
  {
    "name": "短起下钻",
    "english": "Short Trip",
    "description": "仅起出部分钻柱以检查井眼状况。"
  },
  {
    "name": "双吊卡起下钻",
    "english": "Dual Elevator Tripping",
    "description": "使用两个吊卡交替起下钻以提高效率。"
  },
  {
    "name": "起钻错扣",
    "english": "Thread Mismatch During Tripping",
    "description": "起钻时因螺纹损坏或未对齐导致连接失败。"
  },
  {
    "name": "倒换钻具",
    "english": "BHA Change-Out",
    "description": "更换底部钻具组合（如钻头、稳定器等）。"
  },
  {
    "name": "甩钻具",
    "english": "Laying Down Drill String",
    "description": "将钻具从井架移至管架。"
  },
  {
    "name": "换钻头",
    "english": "Bit Change",
    "description": "起出磨损钻头并下入新钻头的操作。"
  },
  {
    "name": "蔻钻井液",
    "english": "Mud Conditioning",
    "description": "调整钻井液性能（如密度、粘度）。"
  },
  {
    "name": "钻头行程",
    "english": "Bit Travel",
    "description": "钻头在一次下井中的总进尺距离。"
  },
  {
    "name": "钻头磨合",
    "english": "Bit Break-In",
    "description": "新钻头下井初期以低钻压和转速适应地层的阶段。"
  },
  {
    "name": "起空车",
    "english": "Empty Block Hoisting",
    "description": "提升空吊卡至钻台准备接单根的操作。"
  },
  {
    "name": "穿大绳",
    "english": "Reeving Deadline",
    "description": "将钢丝绳穿入天车和游车滑轮组。"
  },
  {
    "name": "倒大绳",
    "english": "Deadline Replacement",
    "description": "更换磨损的固定端（死绳）钢丝绳。"
  },
  {
    "name": "死绳",
    "english": "Deadline",
    "description": "钻井绞车钢丝绳的固定端，用于测量大钩载荷。"
  },
  {
    "name": "鼠洞",
    "english": "Mouse Hole",
    "description": "井架上用于临时存放单根钻杆的倾斜管洞。"
  },
  {
    "name": "小凤洞",
    "english": "Auxiliary Mouse Hole",
    "description": "辅助鼠洞，用于存放短钻具或工具。"
  },
  {
    "name": "转盘蝴扣",
    "english": "Rotary Table Thread Damage",
    "description": "转盘补心螺纹因冲击或磨损导致的损坏。"
  },
  {
    "name": "憋泵",
    "english": "Pump Overpressure",
    "description": "泵压异常升高，通常因管路堵塞或喷嘴尺寸过小引起。"
  },
  {
    "name": "储环钻井液",
    "english": "Mud Reserve Circulation",
    "description": "储备钻井液循环系统，用于应急处理。"
  },
  {
    "name": "地面循环",
    "english": "Surface Circulation",
    "description": "钻井液在地面管汇和罐体间的循环。"
  },
  {
    "name": "地质循环",
    "english": "Geological Circulation",
    "description": "为获取地层数据进行的短时间循环操作。"
  },
  {
    "name": "循环周",
    "english": "Circulation Cycle",
    "description": "钻井液从泵出到返回井口的完整循环时间。"
  },
  {
    "name": "处理钻井液",
    "english": "Mud Treatment",
    "description": "通过化学或机械方法调整钻井液性能。"
  },
  {
    "name": "挂辅助刹车",
    "english": "Auxiliary Brake Engagement",
    "description": "启用电磁涡流刹车等辅助装置控制下钻速度。"
  },
  {
    "name": "井史",
    "english": "Well History",
    "description": "记录钻井全过程的技术档案。"
  },
  {
    "name": "钻井日报表",
    "english": "Daily Drilling Report",
    "description": "每日钻井参数、进尺和事件的汇总记录。"
  },
  {
    "name": "钻井班报表",
    "english": "Shift Drilling Report",
    "description": "按班次记录的钻井作业数据。"
  },
  {
    "name": "钻井液班报表",
    "english": "Mud Logging Report",
    "description": "钻井液性能监测的实时记录。"
  },
  {
    "name": "钻头记录",
    "english": "Bit Record",
    "description": "钻头使用时间、进尺和磨损情况的档案。"
  },
  {
    "name": "钻具记录",
    "english": "Drill String Record",
    "description": "钻柱组合、使用历史和检测结果的台账。"
  },
  {
    "name": "喷射钻井",
    "english": "Jet Drilling",
    "description": "利用高速射流辅助破岩的钻井技术。"
  },
  {
    "name": "射流",
    "english": "Jet Flow",
    "description": "从喷嘴喷出的高速流体。"
  },
  {
    "name": "淹没非自由射流",
    "english": "Submerged Non-Free Jet",
    "description": "在受限空间（如井筒）内发展的射流形态。"
  },
  {
    "name": "冲击射流",
    "english": "Impingement Jet",
    "description": "高速射流冲击井底岩石的动力学过程。"
  },
  {
    "name": "气蚀射流（空化射流）",
    "english": "Cavitating Jet",
    "description": "射流中因压力变化产生空泡破裂效应的特殊流态。"
  },
  {
    "name": "脉冲射流",
    "english": "Pulsed Jet",
    "description": "压力周期性波动的射流，可提高破岩效率。"
  },
  {
    "name": "磨料射流",
    "english": "Abrasive Jet",
    "description": "含硬质颗粒的射流，用于切割或清砂。"
  },
  {
    "name": "射流水力参数",
    "english": "Hydraulic Parameters of Jet",
    "description": "包括喷速、冲击力、功率等关键指标。"
  },
  {
    "name": "射流喷速",
    "english": "Jet Velocity",
    "description": "射流出口处的平均流速（单位：m/s）。"
  },
  {
    "name": "射流冲击力",
    "english": "Jet Impact Force",
    "description": "射流对井底岩石的总作用力（单位：kN）。"
  },
  {
    "name": "射流水功率",
    "english": "Jet Hydraulic Power",
    "description": "射流携带的水力能量（单位：kW）。"
  },
  {
    "name": "射流的极点",
    "english": "Jet Stagnation Point",
    "description": "射流冲击面中心压力最大的点。"
  },
  {
    "name": "射流的速度分布",
    "english": "Velocity Profile of Jet",
    "description": "射流横截面上速度的梯度分布规律。"
  },
  {
    "name": "射流的初始段",
    "english": "Jet Initial Zone",
    "description": "射流出口后速度保持恒定的核心区域。"
  },
  {
    "name": "射流的基本段",
    "english": "Jet Main Zone",
    "description": "射流速度开始衰减的过渡区域。"
  },
  {
    "name": "射流扩散角和扩散系数",
    "english": "Jet Spread Angle & Coefficient",
    "description": "描述射流横向扩散程度的参数。"
  },
  {
    "name": "射流等速核",
    "english": "Jet Isovelocity Core",
    "description": "射流中心速度基本相同的区域。"
  },
  {
    "name": "漫流",
    "english": "Wall-Hugging Flow",
    "description": "射流冲击井底后沿井壁横向流动的现象。"
  },
  {
    "name": "射流速度降低系数",
    "english": "Jet Velocity Reduction Coefficient",
    "description": "射流速度随距离衰减的量化指标。"
  },
  {
    "name": "射流动压力",
    "english": "Jet Dynamic Pressure",
    "description": "射流单位面积上的动能（单位：MPa）。"
  },
  {
    "name": "射流动压力降低系数",
    "english": "Dynamic Pressure Reduction Coefficient",
    "description": "射流动压随距离增加的衰减率。"
  },
  {
    "name": "喷射距离",
    "english": "Jet Standoff Distance",
    "description": "喷嘴出口到井底岩石的最佳冲击距离。"
  },
  {
    "name": "钻头水力参数",
    "english": "Bit Hydraulic Parameters",
    "description": "包括压降、功率、效率等优化指标。"
  },
  {
    "name": "钻头压降",
    "english": "Bit Pressure Drop",
    "description": "钻井液流经钻头喷嘴的总压力损失（单位：MPa）。"
  },
  {
    "name": "钻头水功率",
    "english": "Bit Hydraulic Horsepower",
    "description": "钻头喷嘴消耗的水力能量（单位：kW）。"
  },
  {
    "name": "喷嘴",
    "english": "Nozzle",
    "description": "钻头上控制射流特性的流道结构。"
  },
  {
    "name": "喷嘴流道",
    "english": "Nozzle Flow Path",
    "description": "喷嘴内部流体通道的几何形状。"
  },
  {
    "name": "喷嘴流量系数",
    "english": "Nozzle Flow Coefficient",
    "description": "实际流量与理论流量的比值（0.95-0.98）。"
  },
  {
    "name": "流线形喷嘴",
    "english": "Streamlined Nozzle",
    "description": "内壁光滑的喷嘴，减少湍流损失。"
  },
  {
    "name": "喷嘴水力特性",
    "english": "Nozzle Hydraulic Characteristics",
    "description": "包括流量系数、流速分布等性能参数。"
  },
  {
    "name": "喷嘴组合",
    "english": "Nozzle Configuration",
    "description": "不同直径喷嘴的搭配方案（如2×12mm +1×14mm）。"
  },
  {
    "name": "双喷嘴",
    "english": "Dual Nozzle",
    "description": "钻头配置两个主喷嘴的结构。"
  },
  {
    "name": "反喷嘴",
    "english": "Reverse Nozzle",
    "description": "用于井眼清洁的向上喷射辅助喷嘴。"
  },
  {
    "name": "喷射角",
    "english": "Jet Impingement Angle",
    "description": "射流轴线与井底平面的夹角（通常15-30°）。"
  },
  {
    "name": "喷嘴布置",
    "english": "Nozzle Arrangement",
    "description": "喷嘴在钻头体上的空间分布设计。"
  },
  {
    "name": "喷嘴当量直径",
    "english": "Nozzle Equivalent Diameter",
    "description": "多喷嘴组合的等效流通面积直径。"
  },
  {
    "name": "不等径喷嘴最佳直径比值",
    "english": "Optimal Diameter Ratio for Unequal Nozzles",
    "description": "不同直径喷嘴组合的优化比例（如1.2:1）。"
  },
  {
    "name": "钻井液循环系统",
    "english": "Mud Circulating System",
    "description": "包括泵、管汇、固控设备和井下循环路径的完整系统。"
  },
  {
    "name": "循环压耗系数",
    "english": "Circulating Pressure Loss Coefficient",
    "description": "单位长度管路的摩擦压耗（单位：MPa/m）。"
  },
  {
    "name": "循环压耗",
    "english": "Circulating Pressure Loss",
    "description": "钻井液循环过程中的总压力损失（地面+井下）。"
  },
  {
    "name": "临界压耗",
    "english": "Critical Pressure Loss",
    "description": "射流开始空化或系统效率突变的阈值压力。"
  },
  {
    "name": "环空压耗",
    "english": "Annular Pressure Loss",
    "description": "钻井液在环空中流动的摩擦压耗。"
  },
  {
    "name": "地面管汇压耗",
    "english": "Surface Manifold Pressure Loss",
    "description": "钻井液在地面高压管汇中的局部压耗。"
  },
  {
    "name": "地面管汇",
    "english": "Surface Manifold",
    "description": "连接钻井泵、立管和固控设备的管线系统。"
  },
  {
    "name": "钻井水力学",
    "english": "Drilling Hydraulics",
    "description": "研究钻井液流动与能量传递的学科分支。"
  },
  {
    "name": "钻井液流态",
    "english": "Mud Flow Regime",
    "description": "层流、湍流、过渡流等流动状态。"
  },
  {
    "name": "平板层流",
    "english": "Laminar Flow",
    "description": "流速呈抛物线分布的稳定流态。"
  },
  {
    "name": "塞流",
    "english": "Plug Flow",
    "description": "流速分布近似矩形的非牛顿流体流态。"
  },
  {
    "name": "管流",
    "english": "Pipe Flow",
    "description": "流体在圆管内的流动模型。"
  },
  {
    "name": "平板度判别准数",
    "english": "Laminarity Criterion",
    "description": "判断层流稳定性的无量纲参数（如雷诺数）。"
  },
  {
    "name": "喷射钻井的工作方式",
    "english": "Jet Drilling Operating Mode",
    "description": "包括最大水功率、冲击力、喷速等优化模式。"
  },
  {
    "name": "最大钻头水功率工作方式",
    "english": "Maximum Bit Hydraulic Power Mode",
    "description": "优先保证钻头喷嘴消耗最大水力能量的工作模式。"
  },
  {
    "name": "最大射流冲击力工作方式",
    "english": "Maximum Jet Impact Force Mode",
    "description": "优化射流冲击井底力的工作模式。"
  },
  {
    "name": "最大射流喷速工作方式",
    "english": "Maximum Jet Velocity Mode",
    "description": "追求射流出口速度最大化的工作模式。"
  },
  {
    "name": "最优钻井液流",
    "english": "Optimal Mud Flow",
    "description": "平衡携岩能力与压耗的钻井液排量。"
  },
  {
    "name": "临界井深和极限井深",
    "english": "Critical Depth & Limiting Depth",
    "description": "水力参数优化失效的深度阈值（与泵功率和井眼尺寸相关）。"
  },
  {
    "name": "钻井泵的工作状态",
    "english": "Drilling Pump Operating State",
    "description": "钻井泵在特定工况下的压力、流量和功率状态。"
  },
  {
    "name": "钻井泵的调节流量工作状态（允许压力工作状态）",
    "english": "Adjustable Flow Operating State (Allowable Pressure State)",
    "description": "通过调节泵冲次或更换缸套控制流量，同时限制最高压力。"
  },
  {
    "name": "钻井泵的临界工作条件",
    "english": "Critical Operating Conditions of Drilling Pump",
    "description": "泵达到额定功率极限的临界压力或流量值。"
  },
  {
    "name": "钻井泵的额定压力",
    "english": "Rated Pressure of Drilling Pump",
    "description": "泵设计允许的最大持续工作压力（单位：MPa）。"
  },
  {
    "name": "钻井泵的额定流量（缸套的额定流量）",
    "english": "Rated Flow Rate (Liner Flow Rate)",
    "description": "特定缸套尺寸下的理论流量（单位：L/min）。"
  },
  {
    "name": "钻井泵的额定冲数",
    "english": "Rated Strokes per Minute (SPM)",
    "description": "泵在额定工况下的每分钟冲次。"
  },
  {
    "name": "钻井泵的最大输出功率",
    "english": "Maximum Output Power of Drilling Pump",
    "description": "泵在极限工况下的瞬时功率（单位：kW）。"
  },
  {
    "name": "钻井泵的特性曲线",
    "english": "Characteristic Curve of Drilling Pump",
    "description": "泵的流量-压力关系曲线，用于匹配钻井水力需求。"
  },
  {
    "name": "钻井泵的临界特性曲线",
    "english": "Critical Characteristic Curve of Drilling Pump",
    "description": "泵在临界工况下的效率与功率变化曲线。"
  },
  {
    "name": "钻井泵效率",
    "english": "Drilling Pump Efficiency",
    "description": "泵的输出水力功率与输入机械功率的比值（通常为80-90%）。"
  },
  {
    "name": "钻井泵水功率利用率",
    "english": "Hydraulic Power Utilization Ratio of Drilling Pump",
    "description": "有效用于破岩的水功率占总泵功率的百分比。"
  },
  {
    "name": "钻井泵压力有用分配比值",
    "english": "Pressure Utilization Ratio of Drilling Pump",
    "description": "钻头压降占总泵压的比例（推荐值：50-70%）。"
  },
  {
    "name": "携带岩屑",
    "english": "Cuttings Transport",
    "description": "钻井液将岩屑从井底携带至地面的能力。"
  },
  {
    "name": "岩屑运移比",
    "english": "Cuttings Transport Ratio",
    "description": "岩屑上返速度与钻井液环空返速的比值（理想值≥0.5）。"
  },
  {
    "name": "环空岩屑浓度",
    "english": "Annular Cuttings Concentration",
    "description": "环空中岩屑体积与总流体体积的百分比（安全范围：<5%）。"
  },
  {
    "name": "排屑",
    "english": "Cuttings Removal",
    "description": "通过优化钻井液性能和排量清除井内岩屑。"
  },
  {
    "name": "岩屑上返速度",
    "english": "Cuttings Rise Velocity",
    "description": "岩屑在环空中的实际上返速度（单位：m/s）。"
  },
  {
    "name": "最低钻井液环空返速（最低返速）",
    "english": "Minimum Annular Velocity (MAV)",
    "description": "保证有效携岩的最低返速（通常0.5-1.0 m/s）。"
  },
  {
    "name": "最优环空返速",
    "english": "Optimal Annular Velocity",
    "description": "平衡携岩能力与压耗的最佳返速（通过流变模型计算）。"
  },
  {
    "name": "流变性（流变特性）",
    "english": "Rheological Properties",
    "description": "钻井液的剪切应力与剪切速率关系特性。"
  },
  {
    "name": "流变曲线",
    "english": "Rheological Curve",
    "description": "剪切应力随剪切速率变化的曲线（层流/湍流区分）。"
  },
  {
    "name": "流变参数",
    "english": "Rheological Parameters",
    "description": "包括塑性黏度、动切力、n值、K值等。"
  },
  {
    "name": "稠度系数",
    "english": "Consistency Coefficient (K)",
    "description": "幂律流体模型中的黏度系数（单位：Pa·sⁿ）。"
  },
  {
    "name": "流性指数",
    "english": "Flow Behavior Index (n)",
    "description": "描述流体非牛顿性程度的指数（n<1为假塑性，n>1为膨胀性）。"
  },
  {
    "name": "流变模型",
    "english": "Rheological Model",
    "description": "包括宾汉、幂律、赫巴等数学模型。"
  },
  {
    "name": "牛顿流型",
    "english": "Newtonian Fluid Model",
    "description": "剪切应力与剪切速率呈线性关系（如水）。"
  },
  {
    "name": "宾汉流型",
    "english": "Bingham Plastic Model",
    "description": "具有屈服应力的流体模型（如膨润土浆）。"
  },
  {
    "name": "假塑性流体",
    "english": "Pseudoplastic Fluid",
    "description": "剪切稀释型流体（n<1，多数钻井液属此类）。"
  },
  {
    "name": "膨胀性流体",
    "english": "Dilatant Fluid",
    "description": "剪切增稠型流体（n>1，如高浓度砂浆）。"
  },
  {
    "name": "触变性流体",
    "english": "Thixotropic Fluid",
    "description": "静置时凝胶化、搅拌后恢复流动的流体。"
  },
  {
    "name": "震凝性流体",
    "english": "Rheopectic Fluid",
    "description": "剪切作用下黏度增大的罕见流体类型。"
  },
  {
    "name": "赫兹数",
    "english": "Hertz Number (Hz)",
    "description": "用于振动筛分分析的频率参数。"
  },
  {
    "name": "范宁方程",
    "english": "Fanning Equation",
    "description": "计算管路摩擦压耗的经典公式：( \\Delta P = f \\frac{L}{D} \\frac{\\rho v^2}{2} )。"
  },
  {
    "name": "范宁摩擦系数",
    "english": "Fanning Friction Factor (f)",
    "description": "无量纲参数，与雷诺数和管壁粗糙度相关。"
  },
  {
    "name": "Stanton图",
    "english": "Stanton Diagram",
    "description": "摩擦系数与雷诺数的关系曲线图。"
  },
  {
    "name": "绝对粗糙度",
    "english": "Absolute Roughness (ε)",
    "description": "管壁表面凸起的平均高度（单位：mm）。"
  },
  {
    "name": "相对粗糙度",
    "english": "Relative Roughness (ε/D)",
    "description": "绝对粗糙度与管道内径的比值。"
  },
  {
    "name": "钻井液粘附常数",
    "english": "Mud Adhesion Constant",
    "description": "描述钻井液在管壁附着力的实验参数。"
  },
  {
    "name": "偏心环空",
    "english": "Eccentric Annulus",
    "description": "钻柱偏离井眼中心的环空几何形态。"
  },
  {
    "name": "环空偏心度",
    "english": "Annular Eccentricity",
    "description": "偏心距与环空间隙的比值（0=同心，1=完全偏心）。"
  },
  {
    "name": "颗粒滑落速度",
    "english": "Particle Slip Velocity",
    "description": "岩屑在静止流体中的自由沉降速度。"
  },
  {
    "name": "颗粒的自由滑落末速",
    "english": "Terminal Slip Velocity of Particles",
    "description": "颗粒在流体中达到受力平衡时的恒定沉降速度。"
  },
  {
    "name": "向壁效应",
    "english": "Wall-Hugging Effect",
    "description": "岩屑在环空中向井壁侧堆积的现象。"
  },
  {
    "name": "不对称井底流场",
    "english": "Asymmetric Bottomhole Flow Field",
    "description": "因喷嘴布局或井斜导致的非对称流体分布。"
  },
  {
    "name": "对称井底流场",
    "english": "Symmetric Bottomhole Flow Field",
    "description": "各向流速均匀的理想流场状态。"
  },
  {
    "name": "喷射钻井水力参数设计",
    "english": "Hydraulic Parameter Design for Jet Drilling",
    "description": "优化喷嘴尺寸、排量和泵压的工程设计。"
  },
  {
    "name": "水力破岩",
    "english": "Hydraulic Rock Breaking",
    "description": "利用射流动能辅助机械破岩的技术。"
  },
  {
    "name": "水力可钻性曲线",
    "english": "Hydraulic Drillability Curve",
    "description": "地层可钻性与水力参数的对应关系曲线。"
  },
  {
    "name": "优化钻井技术",
    "english": "Optimized Drilling Technology",
    "description": "通过数学模型优选钻压、转速等参数的技术体系。"
  },
  {
    "name": "钻井不可控参数",
    "english": "Uncontrollable Drilling Parameters",
    "description": "如地层压力、岩石硬度等无法人为调整的参数。"
  },
  {
    "name": "钻井目标函数（钻井泛函）",
    "english": "Drilling Objective Function",
    "description": "优化目标（如最低成本、最高钻速）的数学表达式。"
  },
  {
    "name": "优选钻进参数",
    "english": "Optimized Drilling Parameters",
    "description": "通过算法得出的最佳钻压、转速组合。"
  },
  {
    "name": "最优钻压",
    "english": "Optimal Weight on Bit (WOB)",
    "description": "使机械钻速最大化的钻压值。"
  },
  {
    "name": "最优转速",
    "english": "Optimal Rotary Speed (RPM)",
    "description": "平衡钻头磨损与钻速的转速值。"
  },
  {
    "name": "钻进过程的数学模式",
    "english": "Mathematical Model of Drilling Process",
    "description": "描述钻速、磨损与参数关系的微分方程。"
  },
  {
    "name": "目标函数模式",
    "english": "Objective Function Model",
    "description": "将成本、时间等目标量化的数学模型。"
  },
  {
    "name": "钻进成本模式",
    "english": "Drilling Cost Model",
    "description": "计算钻井总成本的公式：( C = C_0 + k \\cdot t )。"
  },
  {
    "name": "牙齿磨速模式",
    "english": "Tooth Wear Rate Model",
    "description": "牙齿磨损量与钻压、转速的关系模型。"
  },
  {
    "name": "轴承磨速模式",
    "english": "Bearing Wear Rate Model",
    "description": "轴承寿命与载荷、转速的关联模型。"
  },
  {
    "name": "压差影响系数",
    "english": "Differential Pressure Impact Coefficient",
    "description": "井底压差对钻速影响的修正系数。"
  },
  {
    "name": "水力参数影响系数",
    "english": "Hydraulic Parameter Impact Coefficient",
    "description": "射流能量对破岩效率的量化影响因子。"
  },
  {
    "name": "比水功率转换系数",
    "english": "Specific Hydraulic Power Conversion Coefficient",
    "description": "将水力功率转换为机械破岩效率的系数。"
  },
  {
    "name": "齿高磨损比值",
    "english": "Tooth Height Wear Ratio",
    "description": "牙齿剩余高度与初始高度的比值（<0.2需起钻）。"
  },
  {
    "name": "牙齿最终磨损",
    "english": "Final Tooth Wear",
    "description": "钻头起出时牙齿的累计磨损量。"
  },
  {
    "name": "钻压影响系数",
    "english": "Weight on Bit Impact Coefficient",
    "description": "钻压对钻速的指数影响因子（通常0.5-1.0）。"
  },
  {
    "name": "转速影响系数",
    "english": "Rotary Speed Impact Coefficient",
    "description": "转速对钻速的指数影响因子（通常0.5-0.8）。"
  },
  {
    "name": "牙齿磨损减慢系数",
    "english": "Tooth Wear Deceleration Coefficient",
    "description": "随磨损加剧导致的钻速下降率。"
  },
  {
    "name": "进尺效果系数",
    "english": "Rate of Penetration (ROP) Efficiency Coefficient",
    "description": "实际进尺与理论最大值的比值。"
  },
  {
    "name": "钻头理论寿命",
    "english": "Theoretical Bit Life",
    "description": "基于磨损模型计算的钻头可工作时长。"
  },
  {
    "name": "钻头寿命系数（工时效果系数）",
    "english": "Bit Life Coefficient (Service Hours Efficiency)",
    "description": "实际使用寿命与理论寿命的比值。"
  },
  {
    "name": "钻头理论进尺",
    "english": "Theoretical Bit Footage",
    "description": "钻头在理想条件下的总进尺预测值。"
  },
  {
    "name": "释放钻压法",
    "english": "Weight on Bit Release Method",
    "description": "通过逐步降低钻压延长钻头寿命的操作。"
  },
  {
    "name": "钻压指数",
    "english": "Weight on Bit Exponent",
    "description": "钻压与钻速关系式中的幂指数（( \\text{ROP} \\propto \\text{WOB}^a )）。"
  },
  {
    "name": "水力临界钻速和水力临界钻压",
    "english": "Hydraulic Critical ROP and WOB",
    "description": "水力参数限制下的最大钻速与钻压阈值。"
  },
  {
    "name": "钻速系数",
    "english": "Rate of Penetration Coefficient",
    "description": "实际钻速与理论值的比值（用于标准化对比）。"
  },
  {
    "name": "地层研磨性系数",
    "english": "Formation Abrasiveness Coefficient",
    "description": "量化地层对钻头磨损程度的参数。"
  },
  {
    "name": "牙齿磨损系数",
    "english": "Tooth Wear Coefficient",
    "description": "单位进尺的牙齿磨损量（mm/m）。"
  },
  {
    "name": "轴承工作系数",
    "english": "Bearing Operating Coefficient",
    "description": "轴承载荷与额定载荷的比值（>1.0需更换）。"
  },
  {
    "name": "钻进成本-工时曲线",
    "english": "Drilling Cost vs. Time Curve",
    "description": "成本随钻井时间变化的优化曲线。"
  },
  {
    "name": "定向钻井",
    "english": "Directional Drilling",
    "description": "控制井眼轨迹按设计路径延伸的技术。"
  },
  {
    "name": "定向井",
    "english": "Directional Well",
    "description": null
  },
  {
    "name": "丛式井",
    "english": "Cluster Well",
    "description": "从同一平台钻出的多口定向井。"
  },
  {
    "name": "救援井",
    "english": "Relief Well",
    "description": "为控制井喷或封堵漏失层钻的辅助井。"
  },
  {
    "name": "绕障井",
    "english": "Bypass Well",
    "description": "绕过地下障碍物（如盐丘、断层）的定向井。"
  },
  {
    "name": "大斜度井",
    "english": "High-Angle Well",
    "description": "井斜角超过60°的定向井。"
  },
  {
    "name": "水平井",
    "english": "Horizontal Well",
    "description": "井斜角达到90°且水平段延伸的井。"
  },
  {
    "name": "长曲率半径水平井",
    "english": "Long-Radius Horizontal Well",
    "description": "造斜率<6°/30m的水平井（半径>300m）。"
  },
  {
    "name": "中曲率半径水平井",
    "english": "Medium-Radius Horizontal Well",
    "description": "造斜率6-30°/30m的水平井（半径100-300m）。"
  },
  {
    "name": "短曲率半径水平井",
    "english": "Short-Radius Horizontal Well",
    "description": "造斜率>30°/30m的水平井（半径<100m）。"
  },
  {
    "name": "斜直井",
    "english": "Slanted Straight Well",
    "description": "井眼轨迹为单一倾斜直线的定向井。"
  },
  {
    "name": "井眼轨道",
    "english": "Wellbore Trajectory",
    "description": "井眼轴线在三维空间中的几何路径。"
  },
  {
    "name": "二维定向井井眼轨道",
    "english": "2D Directional Well Trajectory",
    "description": "仅在垂直平面内变化的轨迹（如S形井）。"
  },
  {
    "name": "三段制井眼轨道",
    "english": "Three-Section Well Trajectory",
    "description": "由垂直段、造斜段、稳斜段组成的轨迹。"
  },
  {
    "name": "修正",
    "english": "Modified Trajectory",
    "description": "根据实钻数据调整后的设计轨迹。"
  },
  {
    "name": "抛物线井眼轨道",
    "english": "Parabolic Well Trajectory",
    "description": "曲率连续变化的抛物线型轨迹。"
  },
  {
    "name": "水平井井眼轨道",
    "english": "Horizontal Well Trajectory",
    "description": "包含垂直段、造斜段和水平段的完整轨迹。"
  },
  {
    "name": "三维定向井井眼轨道",
    "english": "3D Directional Well Trajectory",
    "description": "在三维空间内变化的复杂轨迹（如绕障井）。"
  },
  {
    "name": "斜面法",
    "english": "Inclined Plane Method",
    "description": "通过倾斜钻具组合控制轨迹的方法。"
  },
  {
    "name": "柱面法",
    "english": "Cylindrical Surface Method",
    "description": "以圆柱面为参考的轨迹控制技术。"
  },
  {
    "name": "靶心",
    "english": "Target Center",
    "description": "设计轨迹的终点坐标（允许偏差半径≤30m）。"
  },
  {
    "name": "靶区半径",
    "english": "Target Radius",
    "description": "靶区圆的半径。"
  },
  {
    "name": "设计总水平位移",
    "english": "Total Designed Horizontal Displacement",
    "description": "靶心至井口铅垂线的距离。"
  },
  {
    "name": "设计总垂深",
    "english": "Total Designed Vertical Depth",
    "description": "靶心至井口水平面的距离。"
  },
  {
    "name": "设计方位",
    "english": "Designed Azimuth",
    "description": "targetbearing； plannedazimuth"
  },
  {
    "name": "造斜点",
    "english": "Kick-off Point (KOP)",
    "description": "定向造斜起始的井深处。"
  },
  {
    "name": "量大井斜角",
    "english": "Maximum Hole Inclination Angle",
    "description": "在设计或实钻的井眼轴线上，全井井斜角的最大值。"
  },
  {
    "name": "安全控制圆柱",
    "english": "Safety Control Cylinder (防碰扫描范围)",
    "description": "为防止两井相碰，以井眼轴线为中心，所限定的圆柱空间。"
  },
  {
    "name": "丛式井总体设计",
    "english": "Cluster Well Pad Design",
    "description": "用丛式井进行油田整体开发时，所进行的优化设计系统。它由丛式井平台个数及其位置的优化设"
  },
  {
    "name": "造斜工具",
    "english": "Deflection Tool",
    "description": "用于改变和控制井斜和方位的井下工具。"
  },
  {
    "name": "喷射造斜钻头",
    "english": "Jet Deflection Bit",
    "description": "利用水力喷射能量，在软地层造斜的钻头。"
  },
  {
    "name": "定向器",
    "english": "Orientation Sub",
    "description": "一种用于转盘钻钻定向井的工具。其本体呈楔形，并形成有一定倾角的凹形槽导斜面，以迫使钻"
  },
  {
    "name": "卡瓦固定式定向器",
    "english": "Slip-Type Orientation Sub",
    "description": "— —"
  },
  {
    "name": "悬挂固定式定向器",
    "english": "Hanger-Type Orientation Sub",
    "description": "whipstock"
  },
  {
    "name": "封隔器固定式定向器",
    "english": "Packer-Type Orientation Sub",
    "description": "用特殊封隔器使之固定的定向器。"
  },
  {
    "name": "弯接头",
    "english": "Bent Sub",
    "description": "一种与井底动力钻具相配合，用于定向造斜的井下工具 外形为一个轴线弯曲的厚壁接头，其公"
  },
  {
    "name": "井底动力钻具",
    "english": "Downhole Power Drill (e.g., PDM, Turbine)",
    "description": "装在井下钻具底部驱动钻头转动的动力机a同义词：井底马达"
  },
  {
    "name": "复式弯涡轮钻具",
    "english": "Double-Bend Turbine Drill",
    "description": "multi—turbodrill"
  },
  {
    "name": "螺杆钻具",
    "english": "Positive Displacement Motor (PDM)",
    "description": "motor(PDM)"
  },
  {
    "name": "定向接头",
    "english": "Orientating Sub",
    "description": "一种用于标记造斜工具面的接头。"
  },
  {
    "name": "变向器",
    "english": "Directional Sub",
    "description": "在定向钻井中，用以克服因地层因素产生的井眼方位自然飘移的工具。它能维持井眼方位不变或"
  },
  {
    "name": "承压钻杆",
    "english": "High-Pressure Drill Pipe",
    "description": "在钻杆本体上装有 •个或几个耐磨接触套，承受压力载荷的钻杆，用十中、短曲率半位水平井钻"
  },
  {
    "name": "高压循环头",
    "english": "High-Pressure Circulating Head",
    "description": "有线随钻测斜仪电缆密封装置。它是一个特殊的三通管，下端接钻杆；上端接电缆密封盒，有线"
  },
  {
    "name": "定向",
    "english": "Orientation",
    "description": "在定向钻井中，采用一定的工艺措施保证造斜工具的工具面在井下位于预定的方位上，此工艺过"
  },
  {
    "name": "定向下钻",
    "english": "Oriented Tripping-in",
    "description": "一种地面定向法。定向造斜工具下井之前先将所用的钻杆、钻铤等在其两端接头事先打上\"十''字"
  },
  {
    "name": "斜口管鞋定向法",
    "english": "Mule Shoe Orientation Method",
    "description": "是一种井下定向法。通过测斜仪（如单点照相测斜仪）下部的斜口管鞋使仪器坐在标记井下造斜工"
  },
  {
    "name": "工具面",
    "english": "Tool Face",
    "description": "造斜工具弯曲角所决定的平面称为工具面。"
  },
  {
    "name": "井眼高边",
    "english": "High Side of Hole",
    "description": "过井底井眼轴线的铅垂面与井眼截面的交线的上倾方向为井眼高边。"
  },
  {
    "name": "工具面角",
    "english": "Tool Face Angle",
    "description": "反映造斜工具面所在的相对位置的参数。它有两种表示方法：高边工具面角和磁工具面角。"
  },
  {
    "name": "高边工具面角",
    "english": "High-Side Tool Face Angle",
    "description": "高边所在的铅垂面与工具面的夹角。"
  },
  {
    "name": "磁工具面角",
    "english": "Magnetic Tool Face Angle",
    "description": "以磁北方向线为基准量度的工具面角。即工具面平面与井底平面的交线在水平面上的投影线同磁"
  },
  {
    "name": "装置角",
    "english": "Setting Angle",
    "description": "在使用造斜工具定向或扭方位时，为了得到预期的新井眼，钻进中设置或保持的工具面角。"
  },
  {
    "name": "动力钻具反扭角",
    "english": "Reactive Torque Angle of Downhole Motor",
    "description": "由井底动力钻具反扭矩产生的扭转角。"
  },
  {
    "name": "井眼方位漂移",
    "english": "Azimuthal Drift",
    "description": "由于地层和钻头旋转等原因的影响而产生井眼方位的变化。"
  },
  {
    "name": "提前角",
    "english": "Lead Angle",
    "description": "考虑地质因素、钻具、钻井参数及钻头等因素的影响，预测实钻井眼轨迹的闭合方位与设计方位"
  },
  {
    "name": "装置角图解法",
    "english": "Graphical Method for Setting Angle",
    "description": "应用作图法求解工具面装置角的方法。"
  },
  {
    "name": "造斜",
    "english": "Building Inclination",
    "description": "利用造斜工具钻出一定方位的斜井段的工艺过程。"
  },
  {
    "name": "增斜",
    "english": "Increasing Inclination",
    "description": "使井斜角不断增加的工艺过程。"
  },
  {
    "name": "稳斜",
    "english": "Holding Inclination",
    "description": "使井斜角保持不变的工艺过程。"
  },
  {
    "name": "倒装钻具组合",
    "english": "Inverted Bottom Hole Assembly (BHA)",
    "description": "在钻头或动力钻具之上，接加重钻杆(或承压钻杆)，加重钻杆之上接钻铤的钻具组合。"
  },
  {
    "name": "连续导向钻井系统",
    "english": "Continuous Steering Drilling System",
    "description": "它是一种可以不起钻连续完成定向造斜、增斜、降斜、稳斜和扭方位钻进的井眼轨迹控制手段和"
  },
  {
    "name": "井斜变化率",
    "english": "Rate of Inclination Change",
    "description": "单位长度井段井斜角变化值。通常以相邻两测点间的井斜角变化值与两测点间井段长度的比值来"
  },
  {
    "name": "方位变化率",
    "english": "Rate of Azimuth Change",
    "description": "单位长度井段方位角变化值，通常以相邻二测点间的方位角变化值与二测点间井段长度的比值来"
  },
  {
    "name": "全角变化率",
    "english": "Dogleg Severity (DLS)",
    "description": "单位井段长度井眼轴线在三维空间里的角度变化。"
  },
  {
    "name": "钻头倾角",
    "english": "Bit Tilt Angle",
    "description": "井底井眼轴线与钻头轴线的夹角。"
  },
  {
    "name": "钻头侧向力",
    "english": "Bit Side Force",
    "description": "由于下部钻具受力变形，在钻头上形成的横向力。"
  },
  {
    "name": "侧钻",
    "english": "Sidetracking",
    "description": "在已钻的井眼内，另钻新井眼的工艺过程。"
  },
  {
    "name": "裸眼侧钻",
    "english": "Open Hole Sidetracking",
    "description": "在预定井深采用定向工具钻出新井眼的工艺过程。"
  },
  {
    "name": "套管开窗侧钻",
    "english": "Casing Window Sidetracking",
    "description": null
  },
  {
    "name": "切割套管侧钻",
    "english": "Casing Cut Sidetracking",
    "description": "用磨铳工具磨掉一段套管，使井眼在360°方位全部裸露，便于井下动力钻具向任何方向定向侧"
  },
  {
    "name": "磁性单点照相测斜仪",
    "english": "Magnetic Single-Shot Survey Instrument",
    "description": "磁力测斜仪的一种。包括测摆、磁罗盘、定时器、照像机构和电源等主要部分。可测量井斜角、"
  },
  {
    "name": "磁性多点照相测斜仪",
    "english": "Magnetic Multi-Shot Survey Instrument",
    "description": "其测量原理与磁性单点测斜仪相同，两者结构相似。不同的是它能在定时器的控制下，每隔一定"
  },
  {
    "name": "陀螺单点照相测斜仪",
    "english": "Gyro Single-Shot Survey Instrument",
    "description": "利用陀螺测角原理设计的测量井斜和方位的仪器。当陀螺高速旋转时，其转轴的预定（已知）方"
  },
  {
    "name": "有线随钻测斜仪",
    "english": "Wireline Steering Tool",
    "description": "一种适用于井底动力钻具钻井的随钻测斜仪器，测量信息通过电缆传至地面处理机。可随钻测量"
  },
  {
    "name": "井斜角",
    "english": "Inclination Angle",
    "description": "井眼轴线上某一点的切线（钻进方向）与该点铅垂线之间的夹角。"
  },
  {
    "name": "方位角",
    "english": "Azimuth Angle",
    "description": "井眼轴线上某一点的切线（钻进方向）在水平面上的投影线，与真北方向线之间的夹角（沿顺时针"
  },
  {
    "name": "测深",
    "english": "Measured Depth (MD)",
    "description": "自钻机转盘面（参照点）至井内某测点间的井眼轴线的实测长度。"
  },
  {
    "name": "垂深",
    "english": "True Vertical Depth (TVD)",
    "description": "井眼轴线上某测点至井口转盘面所在水平面的垂直距离。"
  },
  {
    "name": "测点",
    "english": "Survey Station",
    "description": "在井内某处进行定向井参数测量的井深。"
  },
  {
    "name": "陀螺漂移",
    "english": "Gyro Drift",
    "description": "— —"
  },
  {
    "name": "平衡正切法",
    "english": "Balanced Tangential Method",
    "description": "此法假设相邻两测点间的井眼轴线是一条折线，折线的上下两半段长度相等，上半段各点的井斜"
  },
  {
    "name": "平均角法",
    "english": "Average Angle Method",
    "description": "此法假设相邻两测点间的井眼为一直线，该直线的井斜角和方位角等 F两测点井斜角和方位角的"
  },
  {
    "name": "曲率半径法",
    "english": "Radius of Curvature Method",
    "description": "…此法认为相邻两测点间的井眼轴线为空间曲线，该段曲线在其两端点处与上、下两测点处的井"
  },
  {
    "name": "最小曲率法",
    "english": "Minimum Curvature Method",
    "description": "此法假设两测点间的井段是一段斜平面上的圆弧，圆弧在两端点处与上下两测点处的井眼方向线"
  },
  {
    "name": "井身垂直投影图",
    "english": "Vertical Projection Plot",
    "description": "实钻井眼轴线在设计方位线所在垂直平面上的投影图。"
  },
  {
    "name": "视平移",
    "english": "Closure Distance",
    "description": "水平位移在设计方位线上的投影长度。"
  },
  {
    "name": "闭合方位角",
    "english": "Closure Azimuth",
    "description": "真北方位线与水平位移方向之间的夹角."
  },
  {
    "name": "误差椭圆",
    "english": "Error Ellipse",
    "description": "量误差引起的井眼位置的不确定性所构成的三轴椭圆体在水平面上的投影。"
  },
  {
    "name": "安全圆柱防碰扫描图",
    "english": "Anti-Collision Safety Cylinder Scan Plot",
    "description": "表示参照井（或正钻井）井眼轴线距邻近井井眼轴线的距离及其方位的平面投影图。"
  },
  {
    "name": "丛式井水平投影图",
    "english": "Cluster Well Horizontal Projection Plot",
    "description": "平台上所有井的井眼轨迹在水平面上的投影图."
  },
  {
    "name": "丛式井垂直投影图",
    "english": "Cluster Well Vertical Projection Plot",
    "description": "平台上所有井的井眼轨迹在某铅垂面上的投影图."
  },
  {
    "name": "取心钻井",
    "english": "Coring Drilling",
    "description": "取心 coring"
  },
  {
    "name": "破碎地层",
    "english": "Fractured Formation",
    "description": "构造运动形成的断层破碎带。包括堆积在断层两侧的岩石碎块、碎屑和断层角砾岩等。"
  },
  {
    "name": "松散地层",
    "english": "Unconsolidated Formation",
    "description": "胶结成岩差，不易成形的地层。"
  },
  {
    "name": "密闭取心液",
    "english": "Sealed Coring Fluid",
    "description": "用于密闭取心作业的一类专门配制的，不会污染岩心的油基或水基流体。"
  },
  {
    "name": "钻井取心",
    "english": "Core Drilling",
    "description": "利用取心工具钻取岩心的作业。"
  },
  {
    "name": "转盘钻取心",
    "english": "Rotary Table Coring",
    "description": "用转盘带动取心工具钻取岩心的作业。"
  },
  {
    "name": "井底动力钻取心",
    "english": "Downhole Motor Coring",
    "description": "用井底动力钻具带动.取心工具钻取岩心的作业。它包括螺杆钻、涡轮钻和电动钻取心。"
  },
  {
    "name": "井壁取心",
    "english": "Sidewall Coring",
    "description": "用射孔仪器，向已钻出的井壁发射取心器或微型旋转工具钻取岩样的作业。"
  },
  {
    "name": "取心方法",
    "english": "Coring Method",
    "description": "根据不同取心目的与要求，采用相应取心工具和工艺技术进行取心作业。"
  },
  {
    "name": "中筒取心",
    "english": "Medium-Size Core Barrel",
    "description": "取心进尺10~20m/简的取心。"
  },
  {
    "name": "水平井取心",
    "english": "Horizontal Well Coring",
    "description": "—在井斜角大于或等于860,并保持该井角一定长度的水平段的定向井中进行的取心。—46SY / T 5313T3"
  },
  {
    "name": "密闭取心",
    "english": "Pressure-Tight Coring",
    "description": "在取心钻进中, 使用密闭取心液保护岩心不受污染的取心。"
  },
  {
    "name": "定向取心",
    "english": "Oriented Coring",
    "description": "能够确定岩心所处地层裂缝的倾角、倾向等要素的取心。"
  },
  {
    "name": "自锁式取心工具",
    "english": "Self-Locking Coring Tool",
    "description": "上提钻具时，岩心爪能自行抓住岩心的工具。"
  },
  {
    "name": "定向井取心工具",
    "english": "Directional Well Coring Tool",
    "description": "用于大斜度井和水平井中取心的工具。 ."
  },
  {
    "name": "反循环取心工具",
    "english": "Reverse Circulation Coring Tool",
    "description": "利用分水接头的喷嘴造成压降，钻井液自钻头经内筒并从内筒上部侧孔返出，从而促使岩心进入"
  },
  {
    "name": "橡胶套取心工具",
    "english": "Rubber Sleeve Coring Tool",
    "description": "装有特制橡胶软管的取心装置。当岩心进人内筒时，橡胶套能随钻同步紧紧包住岩心."
  },
  {
    "name": "密闭取心工具",
    "english": "Pressure-Tight Coring Tool",
    "description": "内筒装有密闭液，密闭液不断从取心钻头口排出并立即包裹形成的岩心，使其不受钻井液污染的"
  },
  {
    "name": "定向取心工具",
    "english": "Oriented Coring Tool",
    "description": "能够在岩心表面连续刻出标记槽，并通过多点测斜装置，记录与确定岩心方位的取心工具."
  },
  {
    "name": "取心工具的主要部件",
    "english": "Key Components of Coring Tool",
    "description": "组成取心工具的主要零部件，它包括取心安全接头、旋转总成、稳定器、内外岩心筒、岩心爪"
  },
  {
    "name": "取心安全接头",
    "english": "Coring Safety Joint",
    "description": "取心工具被卡，脱开外筒，使内筒和岩心同时起出的专用接头。"
  },
  {
    "name": "泄压球",
    "english": "Pressure Relief Ball",
    "description": "位于旋转总成内的球，取心钻进时，使内筒里的钻井液流入到中环隙。"
  },
  {
    "name": "岩心筒稳定器",
    "english": "Core Barrel Stabilizer",
    "description": "在取心工具中起稳定作用，并能增加刚度的部件。"
  },
  {
    "name": "岩心筒",
    "english": "Core Barrel",
    "description": "取心工具的内岩心筒和外岩心筒的统称。"
  },
  {
    "name": "内岩心筒（内筒）",
    "english": "Inner Core Barrel",
    "description": "取心钻进时，容纳和保护岩心的管子。"
  },
  {
    "name": "支撑节",
    "english": "Support Sub",
    "description": "使取心工具内筒始终居于外筒中心的部件。"
  },
  {
    "name": "岩心爪",
    "english": "Core Catcher",
    "description": "割取岩心和承托已割断岩心柱的部件。"
  },
  {
    "name": "卡板岩心爪",
    "english": "Slip-Type Core Catcher",
    "description": "由弹簧、较链销，四瓣以上的卡板等组成的岩心爪。"
  },
  {
    "name": "卡瓦岩心爪",
    "english": "Wedge-Type Core Catcher",
    "description": "带有倒齿的卡瓦片组成的岩心爪."
  },
  {
    "name": "全封闭岩心爪",
    "english": "Full-Closure Core Catcher",
    "description": "由爪片套，加压套，爪片座等组成的岩心爪。割心后，即可完全封闭内岩心筒底端，用于松散地"
  },
  {
    "name": "钻头端轴承",
    "english": "Drill Bit End Bearing",
    "description": "bearing"
  },
  {
    "name": "取心工具辅助件",
    "english": "Core Tool Auxiliary Component",
    "description": "它是用来拆装、吊运、测量取心工具的部件。"
  },
  {
    "name": "取心钻头装卸器",
    "english": "Core Bit Handling Tool",
    "description": "用于井口旋接和卸开取心钻头的专用工具。"
  },
  {
    "name": "间隙尺",
    "english": "Clearance Gauge",
    "description": "测量内筒底端与取心钻头台肩面距离的专用工具。"
  },
  {
    "name": "岩心标",
    "english": "Core Marker",
    "description": "引导岩心进入内筒的工件，岩心出筒时此件掉出即标志着岩心全部出完。"
  },
  {
    "name": "取心提升短节",
    "english": "Core Lifting Sub",
    "description": "内装轴承，且有内筒螺纹和外筒螺纹的部件。用于在井场吊放取心工具的专用短节."
  },
  {
    "name": "取心质",
    "english": "Core Quality",
    "description": null
  },
  {
    "name": "岩心收获率",
    "english": "Core Recovery Rate",
    "description": null
  },
  {
    "name": "岩心长",
    "english": "Core Length",
    "description": "取出地面岩心的实际长度。"
  },
  {
    "name": "取心进尺",
    "english": "Core Footage",
    "description": "钻取岩心时，钻进的实际长度。"
  },
  {
    "name": "单筒取心进尺",
    "english": "Single-Barrel Core Footage",
    "description": "barrel"
  },
  {
    "name": "平均单筒取心进尺",
    "english": "Average Single-Barrel Core Footage",
    "description": "barrel"
  },
  {
    "name": "照相成功率",
    "english": "Photography Success Rate",
    "description": "照相成功点数与总照相点数之比的百分数。"
  },
  {
    "name": "岩心定向成功率",
    "english": "Core Orientation Success Rate",
    "description": "岩心有刻痕标记的定向成功点数与总定向点数之比的百分数，"
  },
  {
    "name": "卡心",
    "english": "Core Jamming",
    "description": "取心钻进中，岩心在筒内被卡，致使继续钻出的岩心不能进入内筒。"
  },
  {
    "name": "堵心",
    "english": "Core Blockage",
    "description": "取心钻进时，岩心及堆积物将钻头喉部及内筒底部堵死，致使继续钻出的岩心不能进人内筒。"
  },
  {
    "name": "摩心",
    "english": "Core Friction",
    "description": "在取心钻进中，由于岩心被卡或被堵，导致岩心面与岩心面之间的磨损。"
  },
  {
    "name": "外环隙",
    "english": "Outer Annular Clearance",
    "description": "井径与外筒外径之差。"
  },
  {
    "name": "中环隙",
    "english": "Intermediate Annular Clearance",
    "description": "外筒内径与内筒外径之差。"
  },
  {
    "name": "内环隙",
    "english": "Inner Annular Clearance",
    "description": "内筒内径与取心钻头内径之差。"
  },
  {
    "name": "轴向间隙",
    "english": "Axial Clearance",
    "description": "内筒底端与取心钻头定位台肩面之间的距离。"
  },
  {
    "name": "爪心环隙",
    "english": "Core Claw Annular Clearance",
    "description": "岩心爪内径与岩心理论外径之差。"
  },
  {
    "name": "取心钻头口径比",
    "english": "Core Bit Diameter Ratio",
    "description": null
  },
  {
    "name": "钻井液及完井液",
    "english": "Drilling Fluid & Completion Fluid",
    "description": null
  },
  {
    "name": "钻井液",
    "english": "Drilling Fluid",
    "description": null
  },
  {
    "name": "钻井液体系",
    "english": "Drilling Fluid System",
    "description": "为满足钻井工艺要求及适应地层特性而设计的一类钻井液配方及维护工艺。"
  },
  {
    "name": "分散钻井液体系",
    "english": "Dispersed Drilling Fluid System",
    "description": "用木素磺酸盐或类似的分散剂及降滤失剂等处理过的粘土水基钻井液。"
  },
  {
    "name": "聚合物钻井液体系",
    "english": "Polymer Drilling Fluid System",
    "description": "用水溶性高分子聚合物调整流变性，降滤失，具有抑制性能的水基钻井液。这种体系的粘土含量"
  },
  {
    "name": "常规聚合物钻井液",
    "english": "Conventional Polymer Drilling Fluid",
    "description": "通常使用阴离子型或非离子型聚合物作为处理剂的水基钻井液。"
  },
  {
    "name": "阳离子聚合物钻井液",
    "english": "Cationic Polymer Drilling Fluid",
    "description": "以阳离子型聚合物或两性聚电解质为处理剂或主要处理剂的水基钻井液。"
  },
  {
    "name": "盐水钻井液体系",
    "english": "Brine Drilling Fluid System",
    "description": "用盐水、咸水配制，或用淡水配制然后添加适当盐分的水基钻井液。盐水钻井液可含有或不含粘"
  },
  {
    "name": "饱和盐水钻井液",
    "english": "Saturated Brine Drilling Fluid",
    "description": "含氯离子189000mg/（l或含氯化钠310000mg/l）以上的水基钻井液。"
  },
  {
    "name": "盐水钻井液",
    "english": "Brine Drilling Fluid",
    "description": "氯离子含量为6000~189000mg/l（或含氯化钠10000 310000mg/l）的水基钻井液。"
  },
  {
    "name": "完井及修井液体系",
    "english": "Completion & Workover Fluid System",
    "description": "为减少储层损害而设计的井筒工作流体 它包括特殊处理的油基或水基钻井液，混合盐水及清洁"
  },
  {
    "name": "反相乳化钻井液",
    "english": "Invert Emulsion Drilling Fluid",
    "description": "— —"
  },
  {
    "name": "气体钻井流体体系",
    "english": "Gas Drilling Fluid System",
    "description": "由气体或气体与液体组成的一类流体。"
  },
  {
    "name": "雾化钻井流体",
    "english": "Atomized Drilling Fluid",
    "description": "在气流中注入表面活性剂，使其与钻遇的地层水形成以气体为连续相的分散体系。"
  },
  {
    "name": "稳定泡沫",
    "english": "Stable Foam",
    "description": "由泡沫剂和聚合物水溶液组成的稳定泡沫状钻井液。"
  },
  {
    "name": "充气钻井液",
    "english": "Aerated Drilling Fluid",
    "description": "在水基钻井液中注入空气形成的稳定分散体系。"
  },
  {
    "name": "开钻泥浆",
    "english": "Spud Mud",
    "description": "第一次钻井时所用的钻井液。"
  },
  {
    "name": "加重钻井液",
    "english": "Weighted Drilling Fluid",
    "description": "用加重材料使其密度提高了的钻井液。"
  },
  {
    "name": "修井液",
    "english": "Workover Fluid",
    "description": "用于修井作业的流体。"
  },
  {
    "name": "清洁盐水",
    "english": "Clean Brine",
    "description": "经过滤处理，不含大于 0.002mm 粒径悬浮粒子的盐水溶液。"
  },
  {
    "name": "活性水",
    "english": "Active Water",
    "description": "期有表面活性剂的淡水或盐水作业流体。"
  },
  {
    "name": "清扫液",
    "english": "Cleaning Fluid",
    "description": "将井下钻屑带到地面的一种高携砂能力流体。"
  },
  {
    "name": "钻井液性能",
    "english": "Drilling Fluid Performance",
    "description": "钻井液对钻井作业有影响的各种特性。"
  },
  {
    "name": "滤失性",
    "english": "Filtration Property",
    "description": "— —"
  },
  {
    "name": "动滤失量",
    "english": "Dynamic Filtration Loss",
    "description": "钻井液在循环条件下的滤失量。"
  },
  {
    "name": "静滤失量",
    "english": "Static Filtration Loss",
    "description": "钻井液在不流动时的滤失量，"
  },
  {
    "name": "瞬时滤失量",
    "english": "Instantaneous Filtration Loss",
    "description": "钻井液尚未形成滤饼之前的滤失量；通常指过滤作用开始后 Imin内的滤失量。"
  },
  {
    "name": "滤饼",
    "english": "Filter Cake",
    "description": "钻井液在过滤过程中沉积在过滤介质上的固相沉积物。"
  },
  {
    "name": "滤饼厚度",
    "english": "Filter Cake Thickness",
    "description": "过滤介质上沉积的滤饼的厚度"
  },
  {
    "name": "滤饼强度",
    "english": "Filter Cake Strength",
    "description": null
  },
  {
    "name": "内泥饼",
    "english": "Internal Filter Cake",
    "description": "钻井液中的固相在地层孔隙中沉积形成的滤饼。"
  },
  {
    "name": "泥饼摩擦系数",
    "english": "Filter Cake Friction Coefficient",
    "description": "滤饼与钢材表面间的摩擦系数。"
  },
  {
    "name": "钻井液滤液",
    "english": "Drilling Fluid Filtrate",
    "description": "钻井液通过过滤介质流出的液体。"
  },
  {
    "name": "钻井液粘度",
    "english": "Drilling Fluid Viscosity",
    "description": "钻井液内部阻碍其相对流动的阻力。"
  },
  {
    "name": "漏斗粘度",
    "english": "Funnel Viscosity",
    "description": "现场用特制的漏斗粘度计衡量钻井液相对粘度的一种计量。"
  },
  {
    "name": "剪切应力",
    "english": "Shear Stress",
    "description": "—"
  },
  {
    "name": "API表观粘度(AV)",
    "english": "API Apparent Viscosity (AV)",
    "description": "viscosity(AV)"
  },
  {
    "name": "动切力(YP)",
    "english": "Dynamic Yield Point (YP)",
    "description": "point(YP)"
  },
  {
    "name": "切力",
    "english": "Yield Point",
    "description": "胶体形成凝胶的能力；或塑性流体从静止状态开始运动时所需的最低剪切应力。计量单位为"
  },
  {
    "name": "初切力",
    "english": "Initial Yield Point",
    "description": "钻井液经充分搅动后，静置10s测得的切力。计量单位为“Pa”。"
  },
  {
    "name": "终切力",
    "english": "Final Yield Point",
    "description": "钻井液经充分搅动后，静置 lOmin测得的切力。计量单位为叩屋。"
  },
  {
    "name": "触变性",
    "english": "Thixotropy",
    "description": "某些流体在剪切速率为零或接近零的条件下随时间而发展其胶凝结构，在剪切速率增大时又会随"
  },
  {
    "name": "剪切降粘(作用)",
    "english": "Shear Thinning (Effect)",
    "description": "非牛顿流体的表观粘度随剪切速率增加而下降的行为。"
  },
  {
    "name": "当量循环密度",
    "english": "Equivalent Circulating Density (ECD)",
    "description": "钻井液在环形空间循环时的流动阻力折算成相当的密度值与钻井液自身密度值之和。"
  },
  {
    "name": "钻井液密度",
    "english": "Drilling Fluid Density",
    "description": "单位体积钻井液的质量. 单位为“g/cm”。"
  },
  {
    "name": "固体含量",
    "english": "Solid Content",
    "description": "钻井液中固体物质(包括溶解固体及悬浮固体)的总量；以体积百分数计算。"
  },
  {
    "name": "含砂量",
    "english": "Sand Content",
    "description": "钻井液中粒径大于0.076mm的悬浮固相的含量；以体积百分数计算。"
  },
  {
    "name": "膨润土含量",
    "english": "Bentonite Content",
    "description": "—"
  },
  {
    "name": "亚甲兰容量(MBT)",
    "english": "Methylene Blue Test (MBT)",
    "description": "bluecapacity(MBT)"
  },
  {
    "name": "含盐量",
    "english": "Salt Content",
    "description": "将钻井液中的氯离子浓度乘以165系数而算出的氯化钠含量；计量单位为mg/L"
  },
  {
    "name": "含油量",
    "english": "Oil Content",
    "description": "钻井液中所含的油量；以体积百分数表示。"
  },
  {
    "name": "含气量",
    "english": "Gas Content",
    "description": "钻井液中所含气体量；以体积百分数表示。"
  },
  {
    "name": "钻井液污染",
    "english": "Drilling Fluid Contamination",
    "description": "外来物质侵人钻井液使其性能变坏的现象。"
  },
  {
    "name": "固相污染",
    "english": "Solid Phase Contamination",
    "description": "地层固相侵入钻井液使其性能变坏的现象。"
  },
  {
    "name": "粘土侵",
    "english": "Clay Invasion",
    "description": "地层粘土侵人钻井液使其性能变坏的现象。"
  },
  {
    "name": "砂侵",
    "english": "Sand Invasion",
    "description": "地层砂粒侵入钻井液使其含砂量增高的现象。"
  },
  {
    "name": "盐污染",
    "english": "Salt Contamination",
    "description": "钻盐层时，盐侵入钻井液使其性能变坏的现象。"
  },
  {
    "name": "钙污染",
    "english": "Calcium Contamination",
    "description": "钻含钙地层或水泥塞时，钙离子进入钻井液使其性能变坏的现象。"
  },
  {
    "name": "石灰侵",
    "english": "Lime Invasion",
    "description": "由于石灰或水泥中游离石灰导致钻井液钙污染的现象。石灰侵使钻井液PH 值升高。"
  },
  {
    "name": "石膏侵",
    "english": "Gypsum Invasion",
    "description": "石膏或无水石膏中的钙离子污染钻井液使其性能变坏的现象。石膏侵时钻井液的PH 值无明显变"
  },
  {
    "name": "碳酸盐污染",
    "english": "Carbonate Contamination",
    "description": "碳酸根或重碳酸根离子使钻井液性能变坏的现象。"
  },
  {
    "name": "硫化氢污染",
    "english": "Hydrogen Sulfide Contamination",
    "description": "地层中的硫化氢或钻井液处理剂分解产生的硫化氢使钻井液性能变坏的现象。"
  },
  {
    "name": "气侵",
    "english": "Gas Invasion",
    "description": "气体侵入钻井液使其密度下降或性能变坏的现象。"
  },
  {
    "name": "钻井液电稳定性",
    "english": "Drilling Fluid Electrical Stability",
    "description": "用破乳电压来表示的油基钻井液的相对稳定性。"
  },
  {
    "name": "钻井液匀化",
    "english": "Drilling Fluid Homogenization",
    "description": null
  },
  {
    "name": "钻井液老化",
    "english": "Drilling Fluid Aging",
    "description": "使钻井液受热或搅拌，并经历一定时间，使其性能趋于稳定U同义词：钻井液陈化"
  },
  {
    "name": "钻屑",
    "english": "Cuttings",
    "description": "被钻头破碎的岩屑。"
  },
  {
    "name": "砂",
    "english": "Sand",
    "description": "钻井液中粒径在0Q74mm以上的固相粒子。"
  },
  {
    "name": "泥",
    "english": "Mud",
    "description": "钻井液中粒径在0.002 0.074mm 之间的固相粒子。"
  },
  {
    "name": "置换法",
    "english": "Displacement Method",
    "description": "排放部分钻井液，然后添加液相及必要的处理剂以降低钻井液固相含量的方法。"
  },
  {
    "name": "底流排量",
    "english": "Underflow Rate",
    "description": null
  },
  {
    "name": "底流密度",
    "english": "Underflow Density",
    "description": "钻井液从旋流器锥体下端排出流体的密度。"
  },
  {
    "name": "伞状流",
    "english": "Umbrella Flow",
    "description": "旋流器工作正常时, 底流出口处流体以伞状向四周喷出的现象。"
  },
  {
    "name": "底流串稀",
    "english": "Underflow Dilution",
    "description": "旋流器工作不正弹时，底流呈稀液流直泻而下的现象。"
  },
  {
    "name": "干底",
    "english": "Dry Bottom",
    "description": "旋流器底流变干的现象。"
  },
  {
    "name": "造浆率",
    "english": "Mud-Making Rate",
    "description": "15mPa , s的浆液数量；其计量单位为“n?/"
  },
  {
    "name": "毛管吸吮时间(CST值)",
    "english": "Capillary Suction Time (CST Value)",
    "description": "time(CSTvalue)"
  },
  {
    "name": "钻井液设计",
    "english": "Drilling Fluid Design",
    "description": "根据钻井工程设计而拟定的钻井液类型、性能及维护措施等的工艺方案。"
  },
  {
    "name": "钻井液配方",
    "english": "Drilling Fluid Formulation",
    "description": "根据钻井液设计规定的钻井液类型，选择和计算出配制该种钻井液所需物料和添加剂的规格、数"
  },
  {
    "name": "钻井液配制",
    "english": "Drilling Fluid Preparation",
    "description": "根据配方，将各种物料按规定方法配制成钻井液的作业。"
  },
  {
    "name": "钻井液混合设备",
    "english": "Drilling Fluid Mixing Equipment",
    "description": "用来将配浆材料配制成钻井液的设备。包括混合漏斗0就hopper)、喷射器(educta*)、浆式混合器"
  },
  {
    "name": "钻井液测试设备",
    "english": "Drilling Fluid Testing Equipment",
    "description": "用于测试钻井液性能的仪器和设备。"
  },
  {
    "name": "泥浆密度计",
    "english": "Mud Balance",
    "description": "测量钻井液密度的一种专用仪器。"
  },
  {
    "name": "马氏漏斗",
    "english": "Marsh Funnel",
    "description": "推荐现场测量钻井液相对粘度的简单仪器。"
  },
  {
    "name": "毛细管粘度计",
    "english": "Capillary Viscometer",
    "description": "测量钻井液在高剪切速率(10~10。。0067)区流变性的专用仪器。"
  },
  {
    "name": "切力计",
    "english": "Shearometer",
    "description": "测量钻井液静切力的简单仪器。"
  },
  {
    "name": "滤失仪",
    "english": "Filtration Tester",
    "description": "测量钻井液滤失性的装置。"
  },
  {
    "name": "API滤失仪",
    "english": "API Filter Press",
    "description": "过滤面积4580±60mm2, 工作压力 690kPa(100psi), 在温度不超过90七的条件下使用的一种滤"
  },
  {
    "name": "电阻率计",
    "english": "Resistivity Meter",
    "description": "测量钻井液及泥饼电阻率的一种直读式电阻率计。"
  },
  {
    "name": "钻井液润滑仪",
    "english": "Drilling Fluid Lubricity Tester",
    "description": "tester"
  },
  {
    "name": "杀菌剂",
    "english": "Biocide",
    "description": "杀灭或抑制钻井液中微生物生长发育的处理剂。"
  },
  {
    "name": "缓蚀剂",
    "english": "Corrosion Inhibitor",
    "description": "能减轻或抑制钻井液对设备及管柱腐蚀作用的处理剂。"
  },
  {
    "name": "消泡剂",
    "english": "Defoamer",
    "description": "能减少或抑制钻井液及其他液体产生泡沫的处理剂。"
  },
  {
    "name": "乳化剂",
    "english": "Emulsifier",
    "description": "能促使油水乳化和使乳状液稳定的处理剂。"
  },
  {
    "name": "絮凝剂",
    "english": "Flocculant",
    "description": "使钻井液中的胶体粒子发生絮凝的处理剂。"
  },
  {
    "name": "堵漏材料",
    "english": "Lost Circulation Material (LCM)",
    "description": "能防止或减少钻井液在井下漏失的材料。"
  },
  {
    "name": "润滑剂",
    "english": "Lubricant",
    "description": "提高钻井液润滑性的处理剂。"
  },
  {
    "name": "防泥包剂",
    "english": "Anti-Balling Agent",
    "description": "防止钻头和钻具泥包的处理剂。"
  },
  {
    "name": "摩阻降低剂",
    "english": "Friction Reducer",
    "description": "使钻柱转动时的扭矩或流体阻力降低的添加剂。"
  },
  {
    "name": "降粘剂",
    "english": "Viscosity Reducer",
    "description": "不依靠添加液相的冲稀方法，能使钻井液的粘度及切力降低的处理剂."
  },
  {
    "name": "解絮剂",
    "english": "Deflocculant",
    "description": "能拆散胶体凝胶结构的处理剂。"
  },
  {
    "name": "增粘剂",
    "english": "Viscosifier",
    "description": "提高钻井液粘度和切力的有机物或无机物。"
  },
  {
    "name": "凹凸棒石",
    "english": "Attapulgite",
    "description": "能在盐水中造浆的富镁纤维状粘土。"
  },
  {
    "name": "海泡石",
    "english": "Sepiolite",
    "description": "能在盐水中造浆并耐高温（200P以上）的纤维状粘土。"
  },
  {
    "name": "增效膨润土",
    "english": "Enhanced Bentonite",
    "description": "添加了增效剂的膨润土。"
  },
  {
    "name": "高造浆率膨土",
    "english": "High-Yield Bentonite",
    "description": "bentonite"
  },
  {
    "name": "改性膨润土",
    "english": "Modified Bentonite",
    "description": "以钙蒙脱石为主要成分的粘土经钠化处理制得的钻井液用土."
  },
  {
    "name": "基准膨润土",
    "english": "Reference Bentonite",
    "description": "用于评价降粘剂等处理剂性能而专门制备的、符合SY5060《钻井液用膨润土》中的一级膨润——59SY /T 531A93"
  },
  {
    "name": "评价土",
    "english": "Evaluation Clay",
    "description": "用于降滤失剂性能评价而专门制备的，以高岭土为主要成分的粘土。"
  },
  {
    "name": "温度稳定剂",
    "english": "Thermal Stabilizer",
    "description": "使钻井液在高温条件下保持性能稳定（主要是流变性及滤失性）的处理剂。"
  },
  {
    "name": "钻井液示踪剂",
    "english": "Drilling Fluid Tracer",
    "description": "用来指示钻井液侵入岩层或岩心情况的化学剂。"
  },
  {
    "name": "钻井液常规性处理",
    "english": "Routine Drilling Fluid Treatment",
    "description": "不改变钻井液类型及体系，为维持原钻井液性能而补充处理剂的日常维护处理。"
  },
  {
    "name": "钻井液转化处理",
    "english": "Drilling Fluid Conversion Treatment",
    "description": "改变钻井液类型或体系的大型处理。"
  },
  {
    "name": "原浆",
    "english": "Base Mud",
    "description": "未经处理的钻井液。"
  },
  {
    "name": "热滚处理",
    "english": "Hot Rolling Treatment",
    "description": "钻井液试样在滚子加热炉中加热和滚动一定时间，使试样老化的过程。"
  },
  {
    "name": "页岩回收试验",
    "english": "Shale Recovery Test",
    "description": "评定钻井液页岩抑制能力的一种方法。"
  },
  {
    "name": "半致死浓度",
    "english": "LC50 (Lethal Concentration 50%)",
    "description": "使受试生物群体在指定时间内有50%死亡时的物质或毒性材料的浓度；是对钻井液排放物毒性"
  },
  {
    "name": "聚集作用",
    "english": "Aggregation",
    "description": "使二个以上胶粒子聚集成团的作用。聚集作用使钻井液中粘土晶片呈现“面(cid:0)面”的“叠积、"
  },
  {
    "name": "聚集体",
    "english": "Aggregate",
    "description": "由二个以上脱粒子叠积成的团块。聚集体在常规搅拌或摇动时不会解体，但可被研磨或较强的剪"
  },
  {
    "name": "絮凝作用",
    "english": "Flocculation",
    "description": "两个以上胶体粒子轻度结合成松散团块。絮凝作用使钻井液中粘土晶片以“边一面”“边一边”的方"
  },
  {
    "name": "解絮（凝）作用",
    "english": "Deflocculation (Dispersion) Effect",
    "description": "— —"
  },
  {
    "name": "解胶作用",
    "english": "Peptization",
    "description": "用碳酸钠、磷酸钠之类电解质使粘土（膨润土、高岭土）分散性提高的作用."
  },
  {
    "name": "聚合物",
    "english": "Polymer",
    "description": "由多个相同或不同的分子（单体）聚合生成的物质。聚合物以其分子中含有多个重复单元（分子或"
  },
  {
    "name": "生物降解",
    "english": "Biodegradation",
    "description": "因生物作用（常指微生物或酶的作用）使聚合物分子链断裂，分解成一种或多种分子量更低的物"
  },
  {
    "name": "剪切降解",
    "english": "Shear Degradation",
    "description": "聚合物受剪切力作用发生分子链断裂，改变或丧失其原有功能的现象。"
  },
  {
    "name": "化降解",
    "english": "Chemical Degradation",
    "description": "因氧化作用使物质分子量降低或基团变化而丧失其原有功能的现象。"
  },
  {
    "name": "聚电解质",
    "english": "Polyelectrolyte",
    "description": "在其重复单元中含有离子型组份的天然的（如黄胞胶）或合成的（如聚丙烯酸盐）聚合物."
  },
  {
    "name": "聚阳离子",
    "english": "Polycation",
    "description": "其重复单元中含有阳离子基团的聚合物。如环氧氯丙烷二甲胺共聚物（DMA-CO-EPI），聚二甲"
  },
  {
    "name": "两性聚电解质",
    "english": "Amphoteric Polyelectrolyte",
    "description": "聚合物分子的重复单元中同时含有阴、阳两种离子基团的物质。如丙烯酰胺基丙基二甲胺基羟丙"
  },
  {
    "name": "酸败",
    "english": "Rancidity",
    "description": "钻井液中的淀粉或其他多糖物质因细菌作用产生酸臭气味的现象。"
  },
  {
    "name": "油气井压力控制",
    "english": "Well Pressure Control",
    "description": null
  },
  {
    "name": "钻井液柱压力",
    "english": "Hydrostatic Pressure of Drilling Fluid",
    "description": null
  },
  {
    "name": "地层破裂压力",
    "english": "Formation Fracture Pressure",
    "description": "指某一深度的地层受液压而发生破裂时的压力值。"
  },
  {
    "name": "压力当",
    "english": "Pressure Gradient",
    "description": "给定深度处的压力除以深度与重力加速度的乘积。"
  },
  {
    "name": "地层压力检测",
    "english": "Formation Pressure Detection",
    "description": "用来识别和发现异常高压地层的存在，并能估算出异常压力值的各种方法。"
  },
  {
    "name": "正常地层孔隙压力趋势线",
    "english": "Normal Formation Pore Pressure Trend Line",
    "description": "在各种检测地层压力的方法中，所检测的地层参数（多是与孔隙度相关的参数）在正常地层孔隙压"
  },
  {
    "name": "透量法和透量图板",
    "english": "Permeability Method & Chart",
    "description": "定量预报地层孔隙压力的一种方法和工具。"
  },
  {
    "name": "声波时差法",
    "english": "Acoustic Transit Time Method",
    "description": "声波时差是一种与孔隙度有关的参数。根据声波时差随深度的变化可以预测地层孔隙压力。"
  },
  {
    "name": "标准化钻速法",
    "english": "Normalized Rate of Penetration (ROP) Method",
    "description": "把影响钻速的液柱压力与地层孔隙压力之间的压差以外的诸因素作标准化处理，利用钻速的变"
  },
  {
    "name": "页（泥）岩密度法",
    "english": "Shale Density Method",
    "description": "利用钻入压力过渡带或高压层时页（泥）岩岩屑密度减小的规律来检测异常高压层的方法。"
  },
  {
    "name": "溢流观测法",
    "english": "Kick Detection Method",
    "description": "根据溢流时关井测得的立管压力值，加上钻柱内钻井液柱的重力，求得地层压力的方法。"
  },
  {
    "name": "氯化物检测法",
    "english": "Chloride Detection Method",
    "description": "随钻测定返出钻井液中氯化物的含量，利用钻入过渡带或高压层时，钻井液滤液中的氯化物含量"
  },
  {
    "name": "钻井液录井法",
    "english": "Mud Logging Method",
    "description": "利用钻人过渡带或高压层时钻井液性能（密度、动切力、液流指数）的变化来检测高压层的方法。"
  },
  {
    "name": "哈伯特—威利斯法",
    "english": "Hubbert-Willis Method",
    "description": "哈伯特和威利斯根据水力压裂和砂箱试验首次提出了估算地层破裂压力的理论计算法，其计算模"
  },
  {
    "name": "可变的基岩应力系数",
    "english": "Variable Matrix Stress Coefficient",
    "description": "是给定深度处的基岩水平应力与垂直应力的比值，即"
  },
  {
    "name": "艾克斯劳格法",
    "english": "Eaton’s Method",
    "description": "艾克斯劳格引入了均匀构造应力系数，提出了估算地层破裂压力的模式:"
  },
  {
    "name": "附加压力",
    "english": "Overpressure",
    "description": "确定钻井液密度时，钻井液柱压力超过地层压力的压力值。"
  },
  {
    "name": "当",
    "english": "Equivalent (e.g., Pressure Equivalent)",
    "description": "在异常高压层，岩石的骨架应力比同等深度正常压力地层的骨架应力低，这 一较低的骨架应力值"
  },
  {
    "name": "钻柱排代―",
    "english": "Drill Pipe Displacement",
    "description": "钻柱管体所排代的等量钻井液体积。"
  },
  {
    "name": "抽汲压力",
    "english": "Swab Pressure",
    "description": "上提钻柱时，由于钻井液的粘滞作用产生的使井底附近压力减小的瞬时附加压力。"
  },
  {
    "name": "气体上窜",
    "english": "Gas Migration",
    "description": "侵人井内的气体，缓缓上窜的过程。"
  },
  {
    "name": "天然气儡差因子",
    "english": "Gas Deviation Factor (Z-Factor)",
    "description": "把理想气体状态方程引用到实际气体中而引入的一个系数"
  },
  {
    "name": "溢流",
    "english": "Kick",
    "description": "*"
  },
  {
    "name": "溢流量",
    "english": "Kick Volume",
    "description": "地层流体侵入井内的程度，常以循环池内钻井液体积的增加值来表示。"
  },
  {
    "name": "甲烷溢流",
    "english": "Methane Kick",
    "description": "侵入井内的地层流体主要是甲烷天然气. 一般深井甲烷溢流有较长的预警时间。"
  },
  {
    "name": "硫化氢溢流",
    "english": "Hydrogen Sulfide (H₂S) Kick",
    "description": "侵入井内的地层流体主要是硫化氢气体。一般深井硫化氢溢流只有很少的预警时间，因此井控的"
  },
  {
    "name": "预警时间",
    "english": "Kick Warning Time",
    "description": "从用仪器和装置检测出溢流前兆开始到侵入井内的地层流体上行到达井口为止的时间。"
  },
  {
    "name": "井喷",
    "english": "Blowout",
    "description": "地层流体（油、气或水）无控制地流入井内并喷出地面的现象。是一种恶性钻井事故。"
  },
  {
    "name": "地下井喷",
    "english": "Underground Blowout",
    "description": "井下高压层的地层流体（油、气或水），把井内某一薄弱层压破，地层流体由高压层大量流人被压"
  },
  {
    "name": "循环池液体增",
    "english": "Pit Gain",
    "description": "钻入高压层时，如果地层流体进人井内将顶替环空中的钻井液，从而使循环池液面上升，这个体"
  },
  {
    "name": "压力过渡带",
    "english": "Pressure Transition Zone",
    "description": "是指地层压力由正常值逐渐变为异常值的地层，它的下面就是高压层。"
  },
  {
    "name": "压井",
    "english": "Well Killing",
    "description": "向失去压力平衡的井内泵入高密度钻井液，以重建和恢复压力平衡的作业."
  },
  {
    "name": "压井方法",
    "english": "Well Killing Method",
    "description": "根据溢流情况和井场条件，进行压井作业时采用不同的加重、循环和压井程序，这些统称压井方"
  },
  {
    "name": "等候加重法",
    "english": "Wait and Weight Method",
    "description": "method（engineer'smethod）"
  },
  {
    "name": "二次循环法",
    "english": "Two Circulation Method",
    "description": "发现溢流关井求压后，第一个循环周用原来的钻井液以排出环空中侵污的钻井液，待加重钻井液"
  },
  {
    "name": "置换式压井法",
    "english": "Bullheading Method",
    "description": "向井内挤人定量钻井液，关井使钻井液下落至井底，然后泄掉相应量的井口压力。重复这个过"
  },
  {
    "name": "反循环压井",
    "english": "Reverse Circulation Kill",
    "description": "钻井液从环空泵入，由钻杆内返出的循环压井方法。"
  },
  {
    "name": "带帽子压井法",
    "english": "Top Kill Method",
    "description": "起下钻中途突然发生井喷，如果来不及或无法接方钻杆时，可以先抢装控制阀(称带帽子)，再注"
  },
  {
    "name": "下封隔器压井",
    "english": "Packer-Assisted Kill",
    "description": "发生井喷而上部套管或井口装置损坏无法压井时，先安装好不压井起下钻井口装置，下人封隔器"
  },
  {
    "name": "节流循环",
    "english": "Choke Manifold Circulation",
    "description": "调节节流器开启大小，使立管压力保持在所需值的循环方法。"
  },
  {
    "name": "防喷设备和工具",
    "english": "Blowout Preventer (BOP) Equipment & Tools",
    "description": "防止井喷和发生井喷时用来抢救和处理的全套工具和设备的总称。它包括关井、节流、除气、加"
  },
  {
    "name": "防溢管",
    "english": "Spool Piece",
    "description": "用来抬高钻井液出口和防止外溢的一段大尺寸管子，它接在防喷器顶上，上端呈喇叭口形，管体"
  },
  {
    "name": "钻井液流量计",
    "english": "Mud Flow Meter",
    "description": "装在钻井液出口管线上用来测量和记录井口返出流量的指示仪表，并能发出溢流警报。"
  },
  {
    "name": "真空除气器",
    "english": "Vacuum Degasser",
    "description": "利用真空减压法清除钻井液内所含气体的设备。"
  },
  {
    "name": "井控模拟装置",
    "english": "Well Control Simulator",
    "description": "用于井控培训教学的一种专门模拟电子教学仪器。"
  },
  {
    "name": "灌钻井液罐",
    "english": "Trip Tank",
    "description": "用于计量起钻时为了替补起出钻柱管体体积而实际灌入钻井液量的容器。——66SY /T 5313—93"
  },
  {
    "name": "抢装井口",
    "english": "Emergency Wellhead Installation",
    "description": ".在井喷条件下拆除损坏的井口装置，迅速安装新井口装置的作业。"
  },
  {
    "name": "换井口套管",
    "english": "Casing Head Replacement",
    "description": "发生井喷而井口套管损坏，可下入桥塞式封隔器并注人水泥隔开气层或漏失层后，即可更换井口"
  },
  {
    "name": "油气井灭火方法",
    "english": "Well Fire Control Methods",
    "description": "指油气井井喷失控着火后采取的各种有效的灭火方法。"
  },
  {
    "name": "喷射水流灭火法",
    "english": "High-Pressure Water Jet Fire Suppression",
    "description": "用消防水枪或钻井液枪喷射水流灭火的方话，适用于压力低、产量小的气井井喷失控着火。"
  },
  {
    "name": "爆炸灭火法",
    "english": "Explosive Fire Suppression",
    "description": "用炸药在井口上空爆炸以产生强大冲击波压力和CO?隔绝层来灭井口大火的方法。"
  },
  {
    "name": "化学灭火法",
    "english": "Chemical Fire Suppression",
    "description": "用具有高效灭火功能的化学药剂灭火的方法。"
  },
  {
    "name": "钻井事故及处理",
    "english": "Drilling Accidents & Remediation",
    "description": null
  },
  {
    "name": "钻井井下事故",
    "english": "Downhole Drilling Accidents",
    "description": null
  },
  {
    "name": "卡钻",
    "english": "Pipe Sticking",
    "description": "凡钻柱在井内不能上提、下放或转动叫做卡钻。"
  },
  {
    "name": "键槽卡钻",
    "english": "Keyseat Sticking",
    "description": "钻井作业过程中，钻具在井壁形成的槽沟内被卡。"
  },
  {
    "name": "垮塌卡钻",
    "english": "Wellbore Collapse Sticking",
    "description": "井壁垮塌而卡钻。"
  },
  {
    "name": "压差卡钻",
    "english": "Differential Pressure Sticking",
    "description": "钻井液的液柱压力大于地层孔隙压力使钻柱紧贴于井壁，发生的卡钻。"
  },
  {
    "name": "小井眼卡钻",
    "english": "Slim Hole Sticking",
    "description": "当井眼直径小于使用钻头直径，在下钻时钻头压入该井段造成的卡钻。"
  },
  {
    "name": "缩径卡钻",
    "english": "Tight Hole Sticking",
    "description": "由各种因素引起井径缩小造成的卡钻。"
  },
  {
    "name": "落物卡钻",
    "english": "Junk Sticking",
    "description": "由落物造成的卡钻。"
  },
  {
    "name": "水泥卡钻",
    "english": "Cement Sticking",
    "description": "在挤、注水泥作业中造成的卡钻。"
  },
  {
    "name": "钻具事故",
    "english": "Drill String Failure",
    "description": "指钻杆、钻铤、各种工具接头及辅助工具在井下发生的断脱事故。"
  },
  {
    "name": "断钻具",
    "english": "Drill String Breakage",
    "description": "在钻井或其他作业时，钻具折断。"
  },
  {
    "name": "掉钻具",
    "english": "Drill String Drop",
    "description": "钻具在井口发生的落井事故。"
  },
  {
    "name": "落鱼",
    "english": "Fish",
    "description": "—"
  },
  {
    "name": "鱼顶",
    "english": "Fish Top",
    "description": "."
  },
  {
    "name": "井喷事故",
    "english": "Blowout Accident",
    "description": "地层流体（油、气、水）无控制地从地层中喷出井口。"
  },
  {
    "name": "井下事故处理工具",
    "english": "Downhole Fishing Tools",
    "description": "处理井下事故使用的工具总称。"
  },
  {
    "name": "落物打捞工具",
    "english": "Junk Fishing Tools",
    "description": "."
  },
  {
    "name": "强磁打捞器",
    "english": "High-Strength Magnetic Fishing Tool",
    "description": "利用磁铁磁性原理打捞落井黑色金属落物的打捞工具。分为永久性磁铁和电磁铁打捞器两种。"
  },
  {
    "name": "正反循环强磁打捞器",
    "english": "Reversible Circulation Magnetic Fishing Tool",
    "description": "normalor reversecirculation"
  },
  {
    "name": "反循环强磁打措篮",
    "english": "Reverse Circulation Magnetic Fishing Basket",
    "description": "magnet insert"
  },
  {
    "name": "反循环打捞篮",
    "english": "Reverse Circulation Fishing Basket",
    "description": "是利用井底反循环，将井下碎物循环人篮框内的一种打捞工具。"
  },
  {
    "name": "一把抓",
    "english": "\"One Grab\" Fishing Tool",
    "description": "basket；devil'shand"
  },
  {
    "name": "水力打捞器",
    "english": "Hydraulic Fishing Tool",
    "description": "利用液柱压差及排量变化打捞井下落物的工具."
  },
  {
    "name": "打捞杯",
    "english": "Fishing Cup",
    "description": "basket；junksub；bootsub"
  },
  {
    "name": "钻具打捞工具",
    "english": "Drill String Fishing Tool",
    "description": "处理钻具事故使用的工具总称。"
  },
  {
    "name": "卡瓦打捞筒",
    "english": "Overshot (Slip-Type Fishing Tool)",
    "description": "利用卡瓦在筒体螺旋槽内运动，抓卡落鱼的一种工具。可循环，可退出，可倒扣，由卡瓦形式分"
  },
  {
    "name": "公锥",
    "english": "Taper Tap",
    "description": "呈长锥体带外螺纹的打捞工具。按打捞螺纹旋向分为右旋螺纹和左旋螺纹。"
  },
  {
    "name": "母锥",
    "english": "Box Tap",
    "description": "呈长形喇叭体带内螺纹的打捞工具。按打捞螺纹旋向分为右旋螺纹和左旋螺纹。"
  },
  {
    "name": "引子接头",
    "english": "Guide Sub",
    "description": "是辅助打捞工具。引导铳鞋和铳筒顺利进入鱼顶及落鱼。其特点是既可导向，又可对扣。"
  },
  {
    "name": "印模",
    "english": "Impression Block",
    "description": "底部灌铅的特制短节，用来判断鱼顶状况的打印工具。"
  },
  {
    "name": "壁钩",
    "english": "Wall Hook",
    "description": "用来拨正鱼顶，便于打捞的井下工具。"
  },
  {
    "name": "打捞肘节",
    "english": "Fishing Knuckle Joint",
    "description": "是一种辅助打捞工具。主要用在大井眼找鱼的作业，可偏斜7°。"
  },
  {
    "name": "解卡工具",
    "english": "Pipe Freeing Tool",
    "description": "用来解除卡钻事故的专用工具."
  },
  {
    "name": "测卡车（橇）",
    "english": "Stuck Pipe Detection Unit",
    "description": "装有测卡仪器、电缆、地面控制检测仪器的测卡系统的车辆，或拖橇。"
  },
  {
    "name": "测卡仪",
    "english": "Free Point Indicator (FPI)",
    "description": "用于测量钻柱卡点位置的专用仪器。"
  },
  {
    "name": "爆炸系统",
    "english": "Explosive System",
    "description": "包括爆炸松扣作业组成的所有装置、连接件及药物休系。"
  },
  {
    "name": "水眼冲砂工具",
    "english": "Jet Sub for Sand Cleanout",
    "description": "— —"
  },
  {
    "name": "测卡车井口工具",
    "english": "Surface Detection Tools for Stuck Pipe",
    "description": "测卡、爆炸、松扣等作业的井口工具。"
  },
  {
    "name": "震击工具",
    "english": "Jarring Tools",
    "description": "能产生向上或向下震击作用的工具。"
  },
  {
    "name": "机械上击器",
    "english": "Mechanical Jar (Upstroke)",
    "description": "利用机械原理产生上击作用的工具."
  },
  {
    "name": "加速器",
    "english": "Accelerator",
    "description": "能使上击器发挥震击作用的辅助工具。"
  },
  {
    "name": "开式下击器",
    "english": "Open Hole Jar (Downstroke)",
    "description": "外筒与心轴之间不密封的机械下击器。"
  },
  {
    "name": "地面下击器",
    "english": "Surface-Actuated Jar",
    "description": "井口使用的机械式下击解卡工具。"
  },
  {
    "name": "震击器试验架",
    "english": "Jar Testing Frame",
    "description": "地面进行震击效果试验的装置。"
  },
  {
    "name": "防掉套铳工具",
    "english": "Anti-Drop Milling Tool",
    "description": "是钻头不在井底的卡钻事故的套铳打捞工具。当在套铳过程中，该工具能将落鱼挂在套铁管内，"
  },
  {
    "name": "铳鞋",
    "english": "Mill Shoe",
    "description": "磨削落鱼外的障碍物和其他特殊井下作业的筒状井下工具。分切削型、研磨型、保径型三类."
  },
  {
    "name": "套铳管",
    "english": "Milling Casing",
    "description": "-"
  },
  {
    "name": "外接箍套铳管",
    "english": "External Collar Milling Tool",
    "description": "将套铳管两端车成外螺纹，用双内螺纹接箍连接，即外接箍套铳管。"
  },
  {
    "name": "才丁捞套铳工具",
    "english": "Specialized Milling Fishing Tool",
    "description": "是一次井下作业可完成套铳和打捞两项作业的打捞工具。"
  },
  {
    "name": "切割工具",
    "english": "Cutting Tools",
    "description": "通过机械或水力作用控制割刀给进切断井下管柱的工具。"
  },
  {
    "name": "机械式内割刀",
    "english": "Mechanical Internal Cutter",
    "description": "用机械方式控制割刀从管柱内部切断套管、.油管的工具。"
  },
  {
    "name": "机械式外割刀",
    "english": "Mechanical External Cutter",
    "description": "用机械方式控制割刀从管柱外部切断套管、油管和钻杆的工具。"
  },
  {
    "name": "水力式内割刀",
    "english": "Hydraulic Internal Cutter",
    "description": "用水力方式控制割刀从管柱内部切断套管、油管的工具。"
  },
  {
    "name": "水力式外割刀",
    "english": "Hydraulic External Cutter",
    "description": "用水力方式控制割刀从管柱外部切断套管、油管和钻杆的工具。"
  },
  {
    "name": "化学切割工具",
    "english": "Chemical Cutter",
    "description": "本体下部等距离分布的射流喷嘴与其上部连接的水力锚等组成的工具。靠推进剂驱使化学反应剂"
  },
  {
    "name": "爆炸切割工具",
    "english": "Explosive Cutter",
    "description": "是进行爆炸切割的环形固体炸药包。"
  },
  {
    "name": "磨铳工具",
    "english": "Milling Tools",
    "description": "用碳化鸽制作的磨、铳落物的工具。"
  },
  {
    "name": "凹底磨鞋",
    "english": "Concave Bottom Mill",
    "description": "底面为凹型的磨鞋。"
  },
  {
    "name": "引子磨鞋",
    "english": "Pilot Mill",
    "description": "带内、外引鞋的磨鞋。"
  },
  {
    "name": "软打捞工具",
    "english": "Soft Fishing Tools",
    "description": "利用测卡车电缆和钢丝强打捞井下落物的工具。"
  },
  {
    "name": "软打捞下击器",
    "english": "Soft Fishing Jar (Downstroke)",
    "description": "jarsineletricwirelinetool；tubularjars"
  },
  {
    "name": "电缆头打捞筒",
    "english": "Wireline Head Fishing Tool",
    "description": "打捞带电缆头的仪器的专用工具。筒内具有螺旋形卡簧。"
  },
  {
    "name": "内捞绳器（内钩）",
    "english": "Internal Hook (Rope Spear)",
    "description": "内壁带钩打捞电缆、钢丝的工具。"
  },
  {
    "name": "外捞绳器（外钩）",
    "english": "External Hook (Rope Spear)",
    "description": "外部带钩打捞电缆、钢丝的工具。"
  },
  {
    "name": "键槽扩大器",
    "english": "Keyseat Reamer",
    "description": "破坏键槽的专用工具。"
  },
  {
    "name": "井下事故处理工艺",
    "english": "Downhole Remediation Processes",
    "description": "处理井下事故采用的方法及措施。"
  },
  {
    "name": "卡点",
    "english": "Free Point",
    "description": "被卡钻柱最上点。"
  },
  {
    "name": "计算卡点",
    "english": "Free Point Calculation",
    "description": "通过管柱拉伸，计算出钻具被卡段顶部的深度。"
  },
  {
    "name": "测定卡点",
    "english": "Free Point Detection",
    "description": "measuring"
  },
  {
    "name": "爆炸震动解卡",
    "english": "Explosive Shock Release",
    "description": "用电缆把导爆索下至卡点处，引爆后利用爆炸震动解卡的方法。"
  },
  {
    "name": "化学切割",
    "english": "Chemical Cutting",
    "description": "利用电缆运送的化学切割工具，切割油管、套管等管材的方法。"
  },
  {
    "name": "爆炸切割",
    "english": "Explosive Cutting",
    "description": "利用电缆运送的爆炸切割工具，切割钻杆、钻铤等管材的方法。"
  },
  {
    "name": "机械切割",
    "english": "Mechanical Cutting",
    "description": "采用内、外割刀切割部分钻具，捞出的方法。"
  },
  {
    "name": "浸泡解卡",
    "english": "Soaking Release",
    "description": "— —"
  },
  {
    "name": "套铳解卡",
    "english": "Milling Release",
    "description": "用套铳管、铳鞋套铳掉落鱼被卡部分的卡钻物，达到解卡目的。"
  },
  {
    "name": "震击解卡",
    "english": "Jarring Release",
    "description": "利用震击器上、下击被卡钻具，使其受到突然的强烈震击而达到解卡的目的。"
  },
  {
    "name": "循环解卡",
    "english": "Circulation Release",
    "description": "采用不同液体全井循环达到解卡目的。"
  },
  {
    "name": "压力骤变法",
    "english": "Pressure Surge Method",
    "description": "主要用于处理压差卡钻，是将井内部分钻井液用密度较低的液体替换掉，然后使顶替液突然从钻"
  },
  {
    "name": "中途溯试工具法",
    "english": "Intermediate Testing Tool Method",
    "description": "利用裸眼封隔器消除被卡钻具上的液柱压力，减轻被卡钻具粘附作用，并在工具坐封的同时使钻"
  },
  {
    "name": "找鱼顶",
    "english": "Fish Top Location",
    "description": "采用相应的工具和工艺，确定鱼顶位置的作业，"
  },
  {
    "name": "鱼顶修复",
    "english": "Fish Top Restoration",
    "description": "修理不规则鱼顶，有利打捞作业。"
  },
  {
    "name": "造扣方入",
    "english": "Thread Cutting Depth",
    "description": "kelly—in"
  },
  {
    "name": "造扣",
    "english": "Thread Cutting",
    "description": "在鱼顶造出新螺纹的打捞作业。"
  },
  {
    "name": "固井与完井",
    "english": "Cementing & Completion",
    "description": null
  },
  {
    "name": "油井水泥",
    "english": "Oil Well Cement",
    "description": null
  },
  {
    "name": "硅酸盐水泥",
    "english": "Portland Cement",
    "description": "以硅酸钙为主要成分的水泥总称。是指不加外掺料，只在熟料中加适量石膏共同磨细而成的一种"
  },
  {
    "name": "API水泥",
    "english": "API Cement (Class A-G)",
    "description": "美国石油学会(API)把用于油井的水泥称API 水泥。且制定了标准."
  },
  {
    "name": "水硬性水泥",
    "english": "Hydraulic Cement",
    "description": "在水环境中不被稀释而加速硬化或凝固的水泥。"
  },
  {
    "name": "高密度水泥",
    "english": "High-Density Cement",
    "description": "均匀掺入高密度惰性材料的水泥。"
  },
  {
    "name": "泡沫水泥浆",
    "english": "Foamed Cement Slurry",
    "description": "通过泡沫发生器，混以氮气或空气与表面活性剂配制成的超低密度水泥浆。"
  },
  {
    "name": "纤维水泥",
    "english": "Fiber-Reinforced Cement",
    "description": "在干水泥或水泥浆中加有纤维物质，以提高堵漏性能的水泥。"
  },
  {
    "name": "胶乳水泥(浆)",
    "english": "Latex Cement Slurry",
    "description": "."
  },
  {
    "name": "小颗粒水泥",
    "english": "Microfine Cement",
    "description": "G级水泥(100~150um)小许多倍的水泥. 可解决在微裂缝或窜槽通道中进行挤水"
  },
  {
    "name": "非渗透性水泥",
    "english": "Non-Permeable Cement",
    "description": "加有水泥浆在凝固过程中阻止降低颗粒孔隙间流体运移的特殊外加剂，以提高防气窜能力的水"
  },
  {
    "name": "酸溶性水泥",
    "english": "Acid-Soluble Cement",
    "description": "加有碳酸盐岩粉，以提高酸溶性的水泥。"
  },
  {
    "name": "放射性水泥",
    "english": "Radioactive Cement",
    "description": "—"
  },
  {
    "name": "导电水泥",
    "english": "Conductive Cement",
    "description": "加有导电性能的外掺料，使水泥石具有导电性能的水泥。用于电测科学试验。"
  },
  {
    "name": "油井水泥性能",
    "english": "Oil Well Cement Properties",
    "description": "指油井水泥的化学性能和物理性能。"
  },
  {
    "name": "氧化物",
    "english": "Oxides",
    "description": "油井水泥的氧化物包括：二氧化硅(SiO2)、 氧化钙(CaO)、三氧化二铁(Fe2O3)、三氧化二铝"
  },
  {
    "name": "水泥熟料的化合物",
    "english": "Clinker Compounds",
    "description": "水泥熟料含有基本的化合物有：硅酸三钙(C3SD、硅酸二钙(CzSi)、铝酸三钙(C3A)、铁铝酸四钙"
  },
  {
    "name": "水灰比(W/C)",
    "english": "Water-Cement Ratio (W/C)",
    "description": "水泥浆中水对水泥重量的比值。"
  },
  {
    "name": "安定性",
    "english": "Soundness",
    "description": "反映水泥硬化后体积变化均匀性的物理性质。"
  },
  {
    "name": "细度",
    "english": "Fineness",
    "description": "水泥熟料被磨细的程度，以比表面积表示，单位：cm2/g."
  },
  {
    "name": "游离水",
    "english": "Free Water",
    "description": "水泥浆在静止过程中析出的水。按GB 10238规定的方法试验。"
  },
  {
    "name": "水泥浆密度",
    "english": "Cement Slurry Density",
    "description": "指单位体积水泥浆的质量."
  },
  {
    "name": "抗压强度",
    "english": "Compressive Strength",
    "description": "."
  },
  {
    "name": "初凝",
    "english": "Initial Set",
    "description": "当水泥凝结时间测定仪(维卡仪)的试针沉入水泥浆中距底板0.5~L0mm时，则认为水泥浆达到"
  },
  {
    "name": "初凝时间",
    "english": "Initial Setting Time",
    "description": "水泥从加水开始，直至水泥初凝的时间。"
  },
  {
    "name": "终凝",
    "english": "Final Set",
    "description": "当水泥凝结时间测定仪(维卡仪)的试针沉入水泥浆中不超过 1mm时，则被认为水泥浆达到终"
  },
  {
    "name": "终凝时间",
    "english": "Final Setting Time",
    "description": "水泥浆从初凝至终凝的时间。"
  },
  {
    "name": "凝结时间",
    "english": "Setting Time",
    "description": "初凝和终凝的总时间。"
  },
  {
    "name": "假凝",
    "english": "False Set",
    "description": "水泥用水调和几分钟后发生的一种不正常的类似快凝现象。假凝时不明显放热，出现假凝后继续"
  },
  {
    "name": "瞬凝",
    "english": "Flash Set",
    "description": "水泥合水后立即发生一种不正常的快凝现象。瞬凝时放出大量的热，迅速结硬。"
  },
  {
    "name": "水化热",
    "english": "Heat of Hydration",
    "description": "水泥与水混合后，因水化反应所释放的热量。"
  },
  {
    "name": "最大用水量",
    "english": "Maximum Water Requirement",
    "description": "水泥浆在常压稠度仪中搅拌20min后，其游离水量少于1.5%的用水量。"
  },
  {
    "name": "最小用水量",
    "english": "Minimum Water Requirement",
    "description": "水泥浆在20min的常压稠度值为30ABc的用水量。"
  },
  {
    "name": "正常用水量",
    "english": "Normal Water Requirement",
    "description": "水泥浆在20min的常压稠度值为llABc的用水量。"
  },
  {
    "name": "配浆率",
    "english": "Slurry Yield",
    "description": "指每袋水泥能够配制的水泥浆容积。"
  },
  {
    "name": "养护",
    "english": "Curing",
    "description": "为水硬性材料(包括硅酸盐水泥)创造适当的温度、湿度条件，以利其水化硬化的工序。"
  },
  {
    "name": "常压养护",
    "english": "Atmospheric Curing",
    "description": "在大气压下，在给定的温度和湿度条件下使水泥试样水化硬化的养护."
  },
  {
    "name": "加压养护",
    "english": "Pressurized Curing",
    "description": "高于常压的水中，在给定的温度条件下，对水泥试样的养护a"
  },
  {
    "name": "初始稠度",
    "english": "Initial Consistency",
    "description": "在水泥的稠化时间试验中，从试验开始的15~30min间测量到的最大稠度称为初始稠度(Be)。"
  },
  {
    "name": "稠化时间",
    "english": "Thickening Time",
    "description": "用加压稠度仪模拟现场条件，从水泥浆加温加压时起至水泥稠度达到 lOOBc(稠度单位)时所需要"
  },
  {
    "name": "水泥石强度",
    "english": "Cement Sheath Strength",
    "description": "指水泥浆凝固成水泥石后可以承受各种外载荷能力的总称。"
  },
  {
    "name": "水泥浆失水量",
    "english": "Fluid Loss of Cement Slurry",
    "description": "在7MPa压差条件下，用规定的失水仪器，在30min所测量水泥浆的滤失量。"
  },
  {
    "name": "脱水",
    "english": "Dehydration",
    "description": "由于水泥浆失水控制不良，在固井过程或之后，在渗透性地层形成的大量失水。"
  },
  {
    "name": "水泥外加剂",
    "english": "Cement Additives",
    "description": "用来调节水泥浆性能的各种外加剂的总称。"
  },
  {
    "name": "促凝剂",
    "english": "Accelerator",
    "description": "具有加速水泥水化反应和缩短水泥浆凝结时间的外加剂。有的促凝剂还具有提高水泥石早期强度"
  },
  {
    "name": "减阻剂",
    "english": "Friction Reducer",
    "description": "reducer；dispersant"
  },
  {
    "name": "降失水剂",
    "english": "Fluid Loss Additive",
    "description": "losscontrolagent；filtrationcontrolagent"
  },
  {
    "name": "胶凝剂",
    "english": "Gelling Agent",
    "description": "用来增加水泥浆胶凝强度的外加剂。"
  },
  {
    "name": "填充剂",
    "english": "Filler",
    "description": "为增加水泥浆的造浆率或者降低密度而加人的材料。"
  },
  {
    "name": "泡沫稳定剂",
    "english": "Foam Stabilizer",
    "description": "在泡沫水泥浆和钻井液中，能降低固一液T相界面的张力，有利于气泡的形成和稳定，提高气"
  },
  {
    "name": "热稳定剂",
    "english": "Thermal Stabilizer",
    "description": "为防止水泥石在高温条件下强度衰退与破坏而加入的外掺料。如：石英粉。"
  },
  {
    "name": "飞灰",
    "english": "Fly Ash",
    "description": "煤粉燃烧后的灰烬粉尘。它是一种人造火山灰，含硅或硅、铝等材料，属于油井水泥减轻剂."
  },
  {
    "name": "固井",
    "english": "Cementing",
    "description": "对所钻成的裸眼井，通过下套管注水泥以封隔油气水层，加固井壁称为固井。"
  },
  {
    "name": "尾管固井",
    "english": "Liner Cementing",
    "description": "用钻柱将尾管送至设计井段后，对尾管段环空注水泥封隔的方法。—"
  },
  {
    "name": "近平衡压力注水泥",
    "english": "Near-Balance Pressure Cementing",
    "description": "注水泥施工与水泥浆候凝全过程，保持注替水泥浆的动液柱压力不压漏地层，而在候凝过程好液"
  },
  {
    "name": "注水泥方法",
    "english": "Cement Placement Methods",
    "description": ","
  },
  {
    "name": "常规注水泥法",
    "english": "Conventional Cementing",
    "description": "通过套管内注入水泥浆，并由上、下胶塞隔离顶替，使水泥浆返出管外的固井方法。"
  },
  {
    "name": "多管注水泥法",
    "english": "Multiple String Cementing",
    "description": "在多油层的井内，为了更经济地开采，在一个井眼内下入多根油管作套管的注水泥方法。"
  },
  {
    "name": "反循环注水泥",
    "english": "Reverse Circulation Cementing",
    "description": "通过套管环形空间反向注水泥的方法。"
  },
  {
    "name": "延迟注水泥",
    "english": "Delayed Cementing",
    "description": "先下钻柱注人具有超长稠化时间的缓凝水泥浆，然后起出钻柱，再下人套管的注水泥方法。"
  },
  {
    "name": "双凝水泥浆",
    "english": "Dual-Setting Cement Slurry",
    "description": "防止由于水泥浆失重而造成井下有效液柱压力的下降所采用的水泥浆。一般先注人井的水泥浆中"
  },
  {
    "name": "水泥返深",
    "english": "Cement Top Depth",
    "description": "指环空水泥面在井下的深度。"
  },
  {
    "name": "注水泥塞",
    "english": "Cement Plug",
    "description": "在井内适当位置注人水泥浆形成水泥塞的作业。"
  },
  {
    "name": "倾简法注水泥塞",
    "english": "Dump Bailer Cement Plug",
    "description": "把配好的水泥浆灌人特制的倾筒内，用电缆把倾筒送至预定深度注水泥塞的方法。"
  },
  {
    "name": "挤水泥",
    "english": "Squeeze Cementing",
    "description": "将水泥浆挤入环空，在套管和地层之间形成密封的补救性注水泥作业。"
  },
  {
    "name": "封隔器挤水泥法",
    "english": "Packer Squeeze Cementing",
    "description": "将可回收封隔器下至挤水泥目的层顶部附近座封，使封隔器以上套管不受挤水泥压力影响的方"
  },
  {
    "name": "间歇挤水泥",
    "english": "Staged Squeeze Cementing",
    "description": null
  },
  {
    "name": "套管柱下部结构",
    "english": "Casing String Bottom Structure",
    "description": "指套管柱下部装置的附件总称。"
  },
  {
    "name": "套管鞋",
    "english": "Casing Shoe",
    "description": "上端与套管相接，下端具有内倒角并以螺纹或其他方式与引鞋相接的特殊短节."
  },
  {
    "name": "浮鞋",
    "english": "Float Shoe",
    "description": "将引鞋、套管鞋和阀体制成一体的装置，称为浮鞋。"
  },
  {
    "name": "浮箍",
    "english": "Float Collar",
    "description": "装在套管鞋上部接箍内的可钻式止回阀。"
  },
  {
    "name": "套管附件",
    "english": "Casing Accessories",
    "description": "."
  },
  {
    "name": "泥饼刷",
    "english": "Mud Cake Scraper",
    "description": "安装在注水泥井段套管上的钢丝刷子，来清除井壁泥饼。"
  },
  {
    "name": "刚性扶正器",
    "english": "Rigid Centralizer",
    "description": "指带有螺旋槽或直条的不具有弹性的扶正器；一般用于大斜度井、定向井及水平井的套管扶正。"
  },
  {
    "name": "套管扶正器",
    "english": "Casing Centralizer",
    "description": "装在套管柱上使井内套管柱居中的装置。"
  },
  {
    "name": "起动力",
    "english": "Breakout Force",
    "description": "起动扶正器进入规定的套管中所需要的力。"
  },
  {
    "name": "复位力",
    "english": "Reset Force",
    "description": "扶正器抵向井眼驱使套管离开井壁所施加的力。"
  },
  {
    "name": "固井工具",
    "english": "Cementing Tools",
    "description": "固井作业中井下和地面使用的专用工具。"
  },
  {
    "name": "套管吊卡",
    "english": "Casing Elevator",
    "description": "下套管时用来悬吊套管的工具。"
  },
  {
    "name": "套管卡盘",
    "english": "Casing Spider",
    "description": "下套管时在井口用来卡住套管的专用工具。"
  },
  {
    "name": "联顶节",
    "english": "Casing Landing Joint",
    "description": "下套管时接在最后一根套管上用来调节套管柱顶面位置，并与水泥头连接的短套管。"
  },
  {
    "name": "旋转短节",
    "english": "Swivel Sub",
    "description": "联接于水泥头和联顶节之间的特殊短节，具有可转动的心轴，井下套管转动时，水泥头不转动。"
  },
  {
    "name": "水泥头",
    "english": "Cementing Head",
    "description": "在固井作业中内装胶塞的高压井口装置。并具有与循环管线联结的闸门。"
  },
  {
    "name": "旋转水泥头",
    "english": "Rotating Cementing Head",
    "description": null
  },
  {
    "name": "水泥伞",
    "english": "Cement Basket",
    "description": "装在套管下部防止水泥浆下沉的伞状物。"
  },
  {
    "name": "胶塞",
    "english": "Wiper Plug",
    "description": "具有多级盘状翼的橡胶塞，用于固井作业过程中隔离和刮出套管内壁上粘附的钻井液与水泥浆。"
  },
  {
    "name": "尾管悬挂器",
    "english": "Liner Hanger",
    "description": "是用来将尾管悬挂在上一层套管底部并进行注水泥的特殊工具，分机械式和液压式两种。它们都"
  },
  {
    "name": "钻杆胶塞",
    "english": "Drill Pipe Wiper Plug",
    "description": "用于隔离顶替注人钻具内水泥浆的胶塞。"
  },
  {
    "name": "座落接箍",
    "english": "Landing Collar",
    "description": "具有内卡簧座的接箍。当碰压后，胶塞上的卡簧与座落接箍内卡簧座卡合，即可形成正反密封。"
  },
  {
    "name": "回缩距",
    "english": "Recoil Distance",
    "description": "尾管被悬挂后，为卸掉尾管载荷，而下放钻柱的一段距离。"
  },
  {
    "name": "送入钻柱",
    "english": "Running String",
    "description": "送下尾管的专用钻柱。"
  },
  {
    "name": "重叠段",
    "english": "Overlap Section",
    "description": "与外层套管重叠的尾管段."
  },
  {
    "name": "第一级柔性塞",
    "english": "First Stage Flexible Plug",
    "description": "在分级注水泥时用的第一级上胶塞。胶塞裙体大，有柔性，易于通过分接箍，并于井底阻流环碰"
  },
  {
    "name": "开启塞",
    "english": "Opening Plug",
    "description": "打开分接箍上注水泥孔的专用塞。"
  },
  {
    "name": "关闭塞",
    "english": "Closing Plug",
    "description": "用来关闭接箍孔的专用塞。"
  },
  {
    "name": "低压分配器",
    "english": "Low-Pressure Manifold",
    "description": "将液体经低压胶管分送至各水泥车的装置。"
  },
  {
    "name": "高压分配器",
    "english": "High-Pressure Manifold",
    "description": "水泥泵组泵出的高压水泥浆的汇集装置。"
  },
  {
    "name": "通径规",
    "english": "Drift Mandrel",
    "description": "—"
  },
  {
    "name": "通径",
    "english": "Drift Test",
    "description": "允许通径规通过的直径。"
  },
  {
    "name": "套管外封隔器",
    "english": "External Casing Packer (ECP)",
    "description": "安装在套管柱上的一种可膨胀的胶囊，用来封隔开该胶囊上下部的井眼环形空间。膨胀液可分为"
  },
  {
    "name": "缓冲液",
    "english": "Spacer Fluid",
    "description": "注水泥前，在钻井液与水泥浆之间注人的一段特殊配制的液体。由前置液和隔离液两部分组成。"
  },
  {
    "name": "水泥浆",
    "english": "Cement Slurry",
    "description": "水泥与配浆液（水，混拌成所需密度与性能的浆体，"
  },
  {
    "name": "领浆",
    "english": "Lead Slurry",
    "description": "为提高顶替效率，在注水泥前段所注的一段高水灰比的水泥浆a"
  },
  {
    "name": "尾浆",
    "english": "Tail Slurry",
    "description": "在领浆后，用来封隔目的层和套管鞋而注人的水泥浆。"
  },
  {
    "name": "后置液",
    "english": "Post-Flush Fluid",
    "description": "注水泥结束后压人上胶塞时专门配制的一段顶替液。"
  },
  {
    "name": "反冲洗",
    "english": "Reverse Circulation",
    "description": "尾管注水泥或注水泥塞时，为冲洗超量及残余水泥浆，由环空泵入洗井液，从钻具内孔返出的一"
  },
  {
    "name": "桥塞",
    "english": "Bridge Plug",
    "description": "下于井内起封隔作用的一种塞子。可分取出和永久式两种。"
  },
  {
    "name": "水泥干混",
    "english": "Dry Cement Mixing",
    "description": "指干水泥与粉状外加剂的均匀混合."
  },
  {
    "name": "二次混浆",
    "english": "Secondary Slurry Mixing",
    "description": "将水泥浆预先通过一定容器进行二次搅拌，然后注入井内的方法。"
  },
  {
    "name": "替浆压缩系数",
    "english": "Displacement Compressibility Factor",
    "description": "实际替浆量与计算量的差值除以计算量的百分比。"
  },
  {
    "name": "可泵性",
    "english": "Pumpability",
    "description": "水泥浆可泵送的易难成度。"
  },
  {
    "name": "水泥浆流变性",
    "english": "Cement Slurry Rheology",
    "description": "—"
  },
  {
    "name": "注水泥流变设计",
    "english": "Cementing Rheological Design",
    "description": "接近平衡固井原则和实际井眼条件及机泵能力，计算获得最佳顶替流态所需施工参数的设计。"
  },
  {
    "name": "紊流顶替",
    "english": "Turbulent Flow Displacement",
    "description": "水泥浆在环形空间呈紊流状态下的顶替。"
  },
  {
    "name": "模式选择系数",
    "english": "Flow Regime Selection Factor",
    "description": "以剪切应力与剪切速率同模式吻合程度来确定流变模式，即以流变参数差值比。计算式如下："
  },
  {
    "name": "接触时间",
    "english": "Contact Time",
    "description": "紊流状态的前置液和水泥浆流经地层某段或点的总时间。"
  },
  {
    "name": "蹩压候凝",
    "english": "Pressure Holding & Setting",
    "description": "水泥浆未达初凝之前，由环空液柱加压，使增加的压力传递到水泥浆柱体上后的候凝方法。"
  },
  {
    "name": "泄压候凝",
    "english": "Pressure Relief & Setting",
    "description": "水泥浆在套管内敞压条件下的候凝。"
  },
  {
    "name": "水泥环",
    "english": "Cement Sheath",
    "description": "水泥浆在环形空间形成的水泥石。"
  },
  {
    "name": "顶替效率",
    "english": "Displacement Efficiency",
    "description": "环空注水泥井段水泥浆体积占封固段总体积的百分比。"
  },
  {
    "name": "微间隙",
    "english": "Micro-Annulus",
    "description": "由于管内蹩压候凝结束后，泄压引起的管径胀大与回缩，水泥体积的收缩，使凝结后的环空水泥"
  },
  {
    "name": "窜槽",
    "english": "Channeling",
    "description": "水泥浆顶替钻井液不完善，使钻井液残留在水泥环中及地层流体对完整水泥环侵蚀与破坏，造成"
  },
  {
    "name": "水泥塞超高",
    "english": "Cement Plug Overheight",
    "description": "顶替水泥浆未达到设计深度而管内所留水泥塞超高现象。"
  },
  {
    "name": "注水泥时间",
    "english": "Cementing Time",
    "description": "从混合水泥浆开始直至上胶塞碰压为止所经过的总时间。"
  },
  {
    "name": "油层固井合格率",
    "english": "Oil Zone Cementing Qualification Rate",
    "description": "油层固井合格井数与油层固井全部井数的百分比。"
  },
  {
    "name": "套管",
    "english": "Casing",
    "description": "封隔地层，加固井壁所用的特殊钢管。"
  },
  {
    "name": "无缝套管",
    "english": "Seamless Casing",
    "description": "不带有焊缝的热轧钢管。在必要时，进行冷加工，获得必须的形状、尺寸与性能。"
  },
  {
    "name": "无接箍套管",
    "english": "Coupling-Free Casing",
    "description": "一端具有内螺纹，另一端具有外螺纹的套管。"
  },
  {
    "name": "限定屈服强度套管",
    "english": "Yield-Strength-Limited Casing",
    "description": "strengthcasing"
  },
  {
    "name": "套管程序",
    "english": "Casing Program",
    "description": "是指一口井下入的套管层数、类型、直径及深度等。"
  },
  {
    "name": "技术套管",
    "english": "Intermediate Casing",
    "description": "是在表层套管和生产套管之间，由于地层复杂或完井所使用的泥浆密度不致压漏地层等钻井技术"
  },
  {
    "name": "生产套管",
    "english": "Production Casing",
    "description": "为生产层建立一条牢固通道、保护井壁、满足分层开采、测试及改造作业而下入的最后一层套"
  },
  {
    "name": "尾管",
    "english": "Liner",
    "description": "下到裸眼井段，并悬挂在上层套管上，而又不延伸到井口的套管年"
  },
  {
    "name": "钻井尾管",
    "english": "Drilling Liner",
    "description": "功能相当于技术套管层的尾管."
  },
  {
    "name": "生产尾管",
    "english": "Production Liner",
    "description": "功能相当于生产套管层的尾管。"
  },
  {
    "name": "筛管",
    "english": "Screen Pipe",
    "description": "位于油层部位具有筛孔的套管。"
  },
  {
    "name": "接箍",
    "english": "Coupling",
    "description": "用于连接套管或油管的两端皆为内螺纹的连接件。"
  },
  {
    "name": "套管接箍",
    "english": "Casing Coupling",
    "description": "两端具有内螺纹用以连接套管而物理性能优于本体的接箍。"
  },
  {
    "name": "异螺纹接箍",
    "english": "Non-Standard Thread Coupling",
    "description": "具有同一公称尺寸而不同螺纹类型的接箍."
  },
  {
    "name": "套管护丝",
    "english": "Casing Thread Protector",
    "description": "保护套管内外螺纹的附件。分内护丝和外护丝两种。"
  },
  {
    "name": "套管短节",
    "english": "Casing Nipple",
    "description": "小于标准长度套管的短套管。"
  },
  {
    "name": "套管头",
    "english": "Casing Head",
    "description": "由重型钢制法兰、卡瓦及密封元件构成，专门用来悬挂套管及密封环空的井口装置。"
  },
  {
    "name": "套管鞋深度",
    "english": "Casing Shoe Depth",
    "description": "管鞋测量深度。"
  },
  {
    "name": "套管柱长度",
    "english": "Casing String Length",
    "description": "指下井各单根套管长度的总和。"
  },
  {
    "name": "自由套管",
    "english": "Free Pipe",
    "description": "在井下未经水泥环固结的套管段。"
  },
  {
    "name": "人工井底",
    "english": "Artificial Bottom",
    "description": "没计的最下部油层下的阻流环或水泥塞面。"
  },
  {
    "name": "预应力",
    "english": "Prestress",
    "description": "为抵消温度对套管伸长的影响，预先给套管施加拉力所产生的拉应力。"
  },
  {
    "name": "套管公称质量",
    "english": "Casing Nominal Weight",
    "description": "包括接箍在内，平均单位长度套管所具有的质量。"
  },
  {
    "name": "套管公称外径",
    "english": "Casing Nominal Outer Diameter",
    "description": "套管本体横截面的外径."
  },
  {
    "name": "套管特性",
    "english": "Casing Properties",
    "description": "指套管尺寸系列和规范，包括钢级材质与机械性能。"
  },
  {
    "name": "套管拉伸破坏",
    "english": "Casing Tensile Failure",
    "description": "轴向外载荷大于套管强度时，发生螺纹脱扣，螺纹根部断裂以及氢脆断裂，均称拉伸破坏,"
  },
  {
    "name": "套管挤压破坏",
    "english": "Casing Collapse Failure",
    "description": "外挤压力大于套管抗挤强度时，发生挤压变形造成的破坏。"
  },
  {
    "name": "套管外载荷",
    "english": "Casing External Load",
    "description": "套管承受各种外部载荷的总称。"
  },
  {
    "name": "套管内压力",
    "english": "Casing Internal Pressure",
    "description": "指下人井内的套管所承受的地层流体最高压力。"
  },
  {
    "name": "套管外挤压力",
    "english": "Casing External Collapse Pressure",
    "description": "— —"
  },
  {
    "name": "套管轴向力",
    "english": "Casing Axial Force",
    "description": "指套管下入井以后，由于管柱本身重力及其他附加力所产生的轴向力。"
  },
  {
    "name": "套管强度",
    "english": "Casing Strength",
    "description": "指套管承受外载能力的总称。"
  },
  {
    "name": "抗挤强度",
    "english": "Collapse Resistance",
    "description": "按钢级最小屈服强度计算，套管在外挤压力下能够承受挤压破坏的应力值。"
  },
  {
    "name": "抗拉强度",
    "english": "Tensile Strength",
    "description": "・"
  },
  {
    "name": "安全系数",
    "english": "Safety Factor",
    "description": "在套管柱设计时，最大设计载荷与套管强度的比值."
  },
  {
    "name": "抗挤安全系数",
    "english": "Collapse Safety Factor",
    "description": "计算套管抗挤强度时所选用的安全系数。"
  },
  {
    "name": "最大载荷套管柱强度设计",
    "english": "Maximum Load Casing String Strength Design",
    "description": "设计管柱时，外载荷的条件选择均取可能情况下的极限值，设计系数取保守选择，内压按气柱在"
  },
  {
    "name": "最小过载拉力",
    "english": "Minimum Overpull Force",
    "description": "在最大载荷设计中规定，载荷乘以安全系数后，其增加的安全值不能小于某一规定轴向力，该规"
  },
  {
    "name": "等安全系数法",
    "english": "Equal Safety Factor Method",
    "description": "套管柱强度设计时，各段套管最小安全系数应等于设计规定安全系数值，称等安全系数法。"
  },
  {
    "name": "等边际载荷法",
    "english": "Equal Margin Load Method",
    "description": "抗拉设计是先以第一段套管的抗拉强度被安全系数除获得可用强度，又用抗拉强度减去可用强"
  },
  {
    "name": "地层支撑液柱压力梯度",
    "english": "Formation-Supported Fluid Column Pressure Gradient",
    "description": "按有效载荷进行套管抗内压强度设计时必须考虑地层压力对套管压力的反向支撑作用，其支撑力"
  },
  {
    "name": "漏失面深度",
    "english": "Lost Circulation Zone Depth",
    "description": "当钻井液的液柱压力大于地层压力时，将发生漏失，而液柱压力与地层孔隙压力平衡时的管内液"
  },
  {
    "name": "有效抗挤强度及有效抗内压强度",
    "english": "Effective Collapse Strength & Internal Pressure Resistance",
    "description": "套管柱受轴向载荷的影响，在井下套管实际具有的抗挤与抗内压强度."
  },
  {
    "name": "强度设计线",
    "english": "Strength Design Line",
    "description": "套管柱强度设计，当载荷线乘以设计系数后所形成的载荷线。"
  },
  {
    "name": "允许最小抗内压载荷",
    "english": "Minimum Allowable Internal Pressure Load",
    "description": "井口压力乘抗压安全系数。"
  },
  {
    "name": "最小联接强度",
    "english": "Minimum Connection Strength",
    "description": "套管柱总的轴向载荷乘以抗拉安全系数，"
  },
  {
    "name": "剩余强度",
    "english": "Residual Strength",
    "description": "套管抗拉强度或螺纹滑脱强度较小值，除以抗拉安全系数，减去该计算点以下受的轴向载荷的剩"
  },
  {
    "name": "台肩力",
    "english": "Shoulder Force",
    "description": "不同套管壁厚变化处的裸露截面积与液柱压力的乘积，称台肩力。"
  },
  {
    "name": "合成内压载荷",
    "english": "Combined Internal Pressure Load",
    "description": "抗内压设计时，内压载荷与外支撑载荷抵消后的实际载荷。"
  },
  {
    "name": "合成外挤载荷",
    "english": "Combined External Collapse Load",
    "description": "抗挤设计时，外挤载荷与内支撑载荷抵消后的实际外挤载荷。"
  },
  {
    "name": "固井仪器及装备",
    "english": "Cementing Instruments & Equipment",
    "description": "是指油井水泥试验及注水泥的专用仪器及设备。"
  },
  {
    "name": "恒速搅拌器",
    "english": "Constant-Speed Stirrer",
    "description": "转速为4000r/mhi和12000r/min的制备水泥浆专用的搅拌仪器。"
  },
  {
    "name": "稠度仪",
    "english": "Consistometer",
    "description": "用来测定水泥浆稠化时间的仪器，有常压和增压两种类型。"
  },
  {
    "name": "常压稠化仪",
    "english": "Atmospheric Consistometer",
    "description": "为测定游离水含量、失水量及流变性能而制备水泥浆的仪器。并能测定水泥浆的常压稠度。"
  },
  {
    "name": "增压稠度仪",
    "english": "Pressurized Consistometer",
    "description": "用来测定水源浆稠化时间的仪器，具有增温增压性能。"
  },
  {
    "name": "水泥渗透仪",
    "english": "Cement Permeability Tester",
    "description": "测量水泥对水的渗透性的仪器。"
  },
  {
    "name": "抗压强度测试仪",
    "english": "Compressive Strength Tester",
    "description": "测定水泥试块抗压强度的仪器。"
  },
  {
    "name": "加压养护釜",
    "english": "Pressurized Curing Chamber",
    "description": "模拟井下压力、温度而养护水泥试样的仪器。"
  },
  {
    "name": "长期养护釜",
    "english": "Long-Term Curing Chamber",
    "description": "长期加压加温养护水泥试样的试验仪器。"
  },
  {
    "name": "搅拌型失水仪",
    "english": "Agitated Fluid Loss Tester",
    "description": "在动态条件下测.定水泥浆失水量的仪器。"
  },
  {
    "name": "再循环式混合器",
    "english": "Recirculating Mixer",
    "description": "把喷射混合器与再循环加重系统和均化器组合在一起的混合器。"
  },
  {
    "name": "固井质量",
    "english": "Cementing Quality",
    "description": null
  },
  {
    "name": "水泥胶结测井",
    "english": "Cement Bond Log (CBL)",
    "description": null
  },
  {
    "name": "噪声测井",
    "english": "Noise Log",
    "description": "利用声接收装置，探测环空水泥封固段内是否有地层流体流动所发出的噪音，以评价固井质量的"
  },
  {
    "name": "加压测井",
    "english": "Pressurized Logging",
    "description": "为证实第一次声波测井结果，在套管内充压条件下进行胶结测井的方法."
  },
  {
    "name": "耐压测试",
    "english": "Pressure Integrity Test",
    "description": "固井后，通过对套管柱内液体加压来检查套管及管鞋处水泥的密封情况的方法."
  },
  {
    "name": "完井方法",
    "english": "Completion Methods",
    "description": "指油、气井钻井工程最后的一个重要环节，主要包括钻开生产层，确定井底完成方法，安装井底"
  },
  {
    "name": "先期裸眼完井",
    "english": "Open Hole Completion (Primary)",
    "description": "先下油层套管到产层顶部固井，然后再钻开生产层裸眼开采."
  },
  {
    "name": "后期裸眼完井",
    "english": "Open Hole Completion (Secondary)",
    "description": "钻开产层后，只将套管下到产层顶部，注水泥后裸眼开采。"
  },
  {
    "name": "射孔完井",
    "english": "Perforated Completion",
    "description": "将套管下至产层底部固井，然后射孔开采："
  },
  {
    "name": "无油管完井",
    "english": "Tubingless Completion",
    "description": "井内不下油管，利用套管直接开采的方法."
  },
  {
    "name": "贯眼完井",
    "english": "Through-Tubing Completion",
    "description": "把带孔眼套管下入产层部位，在产层顶部注水泥返至环空的方法."
  },
  {
    "name": "衬管完井",
    "english": "Liner Completion",
    "description": "将套管下至生产层顶部进行固井，然后钻开产层，再下人带孔或割缝套管的完井方法。"
  },
  {
    "name": "砾石充填完井",
    "english": "Gravel Pack Completion",
    "description": "在衬管与井壁之间或管内充填一定规格砾石的完井方法。"
  },
  {
    "name": "钻井新方法",
    "english": "Advanced Drilling Methods",
    "description": null
  },
  {
    "name": "磨蚀钻井",
    "english": "Abrasive Drilling",
    "description": null
  },
  {
    "name": "炸药爆破钻井",
    "english": "Explosive Drilling",
    "description": "用炸药撞击岩石而引起爆炸以破碎岩石的钻井方法。"
  },
  {
    "name": "弹丸钻井",
    "english": "Projectile Drilling",
    "description": "用高速的钢粒撞击以破碎岩石的钻井方法。"
  },
  {
    "name": "电火花钻井",
    "english": "Electric Spark Drilling",
    "description": "用高压电的水下电火花产生高压强脉冲，从孔底冲击破碎岩石的钻井方法。"
  },
  {
    "name": "超声波钻井",
    "english": "Ultrasonic Drilling",
    "description": "用磁滞伸缩的铁芯，使发射体高频振动产生超声波，依靠磨蚀和空化作用破碎岩石的钻井方法。"
  },
  {
    "name": "火笛钻井",
    "english": "Jet Flame Drilling",
    "description": "用氧和柴油一起燃烧以产生高温高喷速的火焰来破碎岩石的钻井方法。"
  },
  {
    "name": "电加热钻井",
    "english": "Electric Heating Drilling",
    "description": "用电加热剥落破碎岩石的钻井方法。"
  },
  {
    "name": "微波钻井",
    "english": "Microwave Drilling",
    "description": "用集聚的雷达波来加热和剥落岩石的钻井方法。"
  },
  {
    "name": "原子能钻井",
    "english": "Nuclear Drilling",
    "description": "用原子反应堆熔化岩石的钻井方法。"
  },
  {
    "name": "电弧钻井",
    "english": "Electric Arc Drilling",
    "description": "用电弧的高温熔化岩石的钻井方法。"
  },
  {
    "name": "等离子钻井",
    "english": "Plasma Drilling",
    "description": "用产生的高热转换等离子体熔化岩石的钻井方法。"
  },
  {
    "name": "激光钻井",
    "english": "Laser Drilling",
    "description": "用一种单一频率的光束熔化和气化岩石的钻井方法。"
  },
  {
    "name": "化学腐蚀钻井",
    "english": "Chemical Erosion Drilling",
    "description": "用一种反应化学剂(如氟)破碎岩石的钻井方法。"
  },
  {
    "name": "振动钻井",
    "english": "Vibratory Drilling",
    "description": "用振动器产生振动力使钻头破碎岩石的钻井方法a"
  },
  {
    "name": "行星式钻井",
    "english": "Planetary Drilling",
    "description": null
  },
  {
    "name": "热力钻井",
    "english": "Thermal Drilling",
    "description": "用氧气枪或喷射燃烧器产生的高温熔化和破碎岩石的钻井方法。"
  },
  {
    "name": "石油钻井技术经济",
    "english": "Petroleum Drilling Technology & Economics",
    "description": null
  },
  {
    "name": "钻井技术经济指标",
    "english": "Drilling Technical-Economic Indicators",
    "description": null
  },
  {
    "name": "开钻井口数",
    "english": "Spudded Well Count",
    "description": "指报告期间已一次开钻的井的口数。反映了钻井工作量和钻前搬迁安装的工作量。"
  },
  {
    "name": "完钻井口数",
    "english": "Drilled Well Count",
    "description": "指报告期间钻到目的层后不再往下钻进，且已将钻头提出井口的井的口数。"
  },
  {
    "name": "完井井口数",
    "english": "Completed Wellhead Count",
    "description": "指报舍期间完成了设计规定的全部工序，经检验合格，或经补救合格，或经技术鉴定不需补救的"
  },
  {
    "name": "钻井进尺",
    "english": "Drilling Footage",
    "description": "衡量钻井工作量的基本指标。钻井进尺从转盘补心顶面算起，单位为米。"
  },
  {
    "name": "取心收获率",
    "english": "Core Recovery Rate",
    "description": "岩心长与取心进尺之比的百分数。"
  },
  {
    "name": "井身质量率",
    "english": "Wellbore Quality Rate",
    "description": "衡量钻井工程质量的指标之一，计算公式为："
  },
  {
    "name": "生产层固井合格率",
    "english": "Production Zone Cementing Qualification Rate",
    "description": "反映油层固井工程质量的指标。计算公式如下："
  },
  {
    "name": "钻井工程报废",
    "english": "Drilling Project Abandonment",
    "description": "如钻井队在某井未完成最后一道工序而离开，该井即作为工程报废。钻井工程报废还包括有些井"
  },
  {
    "name": "报废井段",
    "english": "Abandoned Well Interval",
    "description": "包括两种情况： 因钻井事故而决定不再继续钻进时，如某井段已取得设计所要求的地质资料，"
  },
  {
    "name": "报废进尺",
    "english": "Abandoned Footage",
    "description": "指由于钻井事故无法解除而报废的进尺，或由于灾害等其他原因造成的无效进尺。"
  },
  {
    "name": "钻机台月",
    "english": "Rig Month",
    "description": "综合反映投人钻井工作的钻机台数和每台钻机钻井工作时间长短的指标。一台钻机的钻井工作时"
  },
  {
    "name": "钻井周期",
    "english": "Drilling Cycle",
    "description": "一开到完钻的全部时间。"
  },
  {
    "name": "建井周期",
    "english": "Well Construction Cycle",
    "description": "指从钻机搬迁安装到完井为止的全部时间。包括搬迁安装时间、钻进时间和完井时间三部分。"
  },
  {
    "name": "建井周期台月",
    "english": "Well Construction Cycle (Rig Month)",
    "description": "用台月表示的建井周期。一台钻机从搬迁安装到完井为止的时间（建井周期）达到一个月，即为一"
  },
  {
    "name": "钻机月速",
    "english": "Rig Monthly Speed",
    "description": "衡量钻井工作时间内钻井效率的指标，以每个钻机台月的钻井进尺来表示，计算公式如下："
  },
  {
    "name": "周期钻速",
    "english": "Cycle Drilling Rate",
    "description": "综合反映钻井部门钻井效率的指标，以每个建井周期台月的钻井进尺来表示，计算公式如下："
  },
  {
    "name": "平均机械钻速",
    "english": "Average Rate of Penetration (ROP)",
    "description": "衡量纯钻进时间内钻井效率的指标，以每小时纯钻进时间的钻井进尺来表示，"
  },
  {
    "name": "完成井平均建井周期",
    "english": "Average Well Construction Cycle for Completed Wells",
    "description": "综合反映钻井速度的指标，以平均完成一口井需要的天数或小时来表示。计算公式如下:"
  },
  {
    "name": "完成井平均井深",
    "english": "Average Depth of Completed Wells",
    "description": "反映报告期间已完成井平均深度的指标。计算公式如下:"
  },
  {
    "name": "完成井平均钻头进尺",
    "english": "Average Bit Footage per Completed Well",
    "description": "反映钻头利用情况和钻头质量的重要指标。计算公式如下:"
  },
  {
    "name": "年平均钻井队数",
    "english": "Annual Average Number of Drilling Crews",
    "description": "指报告期实有的平均钻井队数。计算公式如下："
  },
  {
    "name": "钻井时效分析",
    "english": "Drilling Time Efficiency Analysis",
    "description": "将钻井工作时间进行分类（分为生产时间和非生产时间）以分析钻井工作时间的利用情况，为提高"
  },
  {
    "name": "进尺工作时间",
    "english": "Footage Working Hours",
    "description": "与正常钻进直接有关的时间，包括纯钻进时间、起下钻时间、划眼和扩眼时间、换钻头时间、接"
  },
  {
    "name": "固井工作时间",
    "english": "Cementing Working Hours",
    "description": "指为固井所进行的一切正常工艺措施所占用的时间。包括准备工作，如下套管前的划眼、试下套"
  },
  {
    "name": "事故损失时间",
    "english": "Accident Downtime",
    "description": "指从事故发生起到事故解除恢复正常状态为止的时间。事故包括井下事故（如卡钻、打捞）、 井喷"
  },
  {
    "name": "修理时间",
    "english": "Repair Time",
    "description": "指由于机械设备或地面建筑物损坏或运转失灵被迫停止钻井工作进行修理的时间，包括机械动力"
  },
  {
    "name": "处理复杂情况时间",
    "english": "Non-Productive Time (NPT)",
    "description": "指处理井斜过大或井壁坍塌回填重钻、井漏、水浸，气浸、遇阻遇卡、钻井液循环发生故障、钻"
  },
  {
    "name": "生产时间率",
    "english": "Productive Time Ratio",
    "description": "衡量钻井工作时间的利用程度的指标之一，以生产时间占全部工作时间的百分比来表示。"
  },
  {
    "name": "纯钻进时间率",
    "english": "Pure Drilling Time Ratio",
    "description": "衡量钻井工作时间用于纯钻进部分的指标，以纯钻进时间占全部钻井工作时间的百分比来表示。"
  },
  {
    "name": "钻井单位总成本",
    "english": "Total Drilling Unit Cost",
    "description": "反映钻井经济效果的主要指标，指每米进尺的平均总成本。计算公式如下："
  },
  {
    "name": "钻井工程成本",
    "english": "Drilling Engineering Cost",
    "description": "指钻井过程中所发生的全部费用。包括材料费、工资及附加费、折旧费、井控装置摊销费、其他"
  },
  {
    "name": "钻井工程单位成本",
    "english": "Drilling Engineering Unit Cost",
    "description": "衡量钻井工程成本水平的基本指标，以每米进尺的平均成本来计算。"
  }
]