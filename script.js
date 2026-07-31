// =============================================
// البيانات الأساسية
// =============================================
const STORAGE_KEY = 'learningPlatformData';
const DAYS_TOTAL = 180;

const defaultData = {
    user: { name: 'إبراهيم' },
    startDate: new Date().toISOString(),
    completedDays: [],
    progressEntries: [],
    notes: [],
    projects: [],
    skills: [
        { name: 'HTML', level: 0, icon: '🌐' },
        { name: 'CSS', level: 0, icon: '🎨' },
        { name: 'JavaScript', level: 0, icon: '⚡' },
        { name: 'Git', level: 0, icon: '🔀' },
        { name: 'Bootstrap', level: 0, icon: '💅' },
        { name: 'C#', level: 0, icon: '🔷' },
        { name: 'SQL', level: 0, icon: '🗄️' },
        { name: 'ASP.NET Core', level: 0, icon: '⚙️' },
        { name: 'Entity Framework', level: 0, icon: '📦' },
        { name: 'REST API', level: 0, icon: '🔗' },
        { name: 'JWT', level: 0, icon: '🔐' },
        { name: 'Deployment', level: 0, icon: '🚀' }
    ],
    achievements: [],
    streak: 0,
    lastStudyDate: null,
    theme: 'dark',
    notifications: [
        { title: '🚀 مرحباً بك في منصة تعلمي!', time: new Date().toISOString() }
    ],
    ratings: {},
    dailyStudyTime: {}
};

// =============================================
// الخطة الدراسية (جميع الأيام - 180 يوم)
// =============================================
const roadmapData = {
    month1: {
        name: '🌐 الشهر الأول: HTML + CSS',
        days: [
            { day: 1, topic: 'هيكل HTML الأساسي', description: 'تعلم هيكل صفحة HTML بالكامل', goals: ['فهم DOCTYPE', 'معرفة html, head, body', 'كتابة أول صفحة'], tasks: ['إنشاء ملف HTML', 'كتابة الهيكل الأساسي', 'إضافة عناصر النصوص'], resources: ['📄 توثيق HTML', '🎬 فيديو 1'], duration: 2, source: 'فيديو 1', part: 'الجزء الأول' },
            { day: 2, topic: 'النصوص والعناوين', description: 'تعلم استخدام عناصر النصوص والعناوين', goals: ['فهم h1-h6', 'معرفة p, span, div', 'تنسيق النصوص'], tasks: ['كتابة عناوين مختلفة', 'إضافة فقرات', 'استخدام span للتمييز'], resources: ['📄 توثيق العناوين', '🎬 فيديو 2'], duration: 2, source: 'فيديو 2', part: 'الجزء الثاني' },
            { day: 3, topic: 'القوائم والروابط', description: 'تعلم إنشاء القوائم والروابط', goals: ['فهم ul, ol, li', 'معرفة a', 'ربط الصفحات'], tasks: ['إنشاء قائمة غير مرتبة', 'إنشاء قائمة مرتبة', 'إضافة روابط'], resources: ['📄 توثيق القوائم', '🎬 فيديو 3'], duration: 2, source: 'فيديو 3', part: 'الجزء الثالث' },
            { day: 4, topic: 'الصور والجداول', description: 'تعلم إضافة الصور وإنشاء الجداول', goals: ['فهم img', 'معرفة table, tr, td', 'تنسيق الجداول'], tasks: ['إضافة صورة', 'إنشاء جدول', 'تنسيق الجدول'], resources: ['📄 توثيق الصور', '🎬 فيديو 4'], duration: 2, source: 'فيديو 4', part: 'الجزء الرابع' },
            { day: 5, topic: 'النماذج', description: 'تعلم إنشاء النماذج التفاعلية', goals: ['فهم form', 'معرفة input, button', 'استخدام select, textarea'], tasks: ['إنشاء نموذج تسجيل', 'إضافة أزرار', 'إضافة قوائم منسدلة'], resources: ['📄 توثيق النماذج', '🎬 فيديو 5'], duration: 2, source: 'فيديو 5', part: 'الجزء الخامس' },
            { day: 6, topic: 'Semantic HTML', description: 'تعلم استخدام العناصر الدلالية', goals: ['فهم header, nav, main', 'معرفة section, article', 'استخدام footer'], tasks: ['إنشاء صفحة بـ semantic', 'تنظيم المحتوى', 'تحسين SEO'], resources: ['📄 توثيق semantic', '🎬 فيديو 6'], duration: 2, source: 'فيديو 6', part: 'الجزء السادس' },
            { day: 7, topic: 'مقدمة في CSS', description: 'تعلم طرق تنسيق CSS', goals: ['فهم الطرق الثلاث', 'معرفة selectors', 'تطبيق التنسيق'], tasks: ['تنسيق عنصر بـ inline', 'تنسيق بـ internal', 'تنسيق بـ external'], resources: ['📄 توثيق CSS', '🎬 فيديو 7'], duration: 2, source: 'فيديو 7', part: 'الجزء السابع' },
            { day: 8, topic: 'الألوان والخلفيات', description: 'تعلم استخدام الألوان والخلفيات', goals: ['فهم color', 'معرفة background', 'استخدام gradients'], tasks: ['تغيير ألوان النصوص', 'إضافة خلفيات', 'استخدام gradients'], resources: ['📄 توثيق الألوان', '🎬 فيديو 8'], duration: 2, source: 'فيديو 8', part: 'الجزء الثامن' },
            { day: 9, topic: 'الخطوط', description: 'تعلم تنسيق الخطوط', goals: ['فهم font-family', 'معرفة font-size', 'استخدام font-weight'], tasks: ['تغيير نوع الخط', 'تغيير حجم الخط', 'تغيير سمك الخط'], resources: ['📄 توثيق الخطوط', '🎬 فيديو 9'], duration: 2, source: 'فيديو 9', part: 'الجزء التاسع' },
            { day: 10, topic: 'Box Model', description: 'تعلم نموذج الصندوق', goals: ['فهم margin', 'معرفة padding', 'استخدام border'], tasks: ['إضافة هوامش', 'إضافة حشوات', 'إضافة حدود'], resources: ['📄 توثيق Box Model', '🎬 فيديو 10'], duration: 2, source: 'فيديو 10', part: 'الجزء العاشر' },
            { day: 11, topic: 'Display', description: 'تعلم أنواع العرض', goals: ['فهم block', 'معرفة inline', 'استخدام inline-block'], tasks: ['تغيير display', 'فهم الفرق', 'تطبيق عملي'], resources: ['📄 توثيق Display', '🎬 فيديو 11'], duration: 2, source: 'فيديو 11', part: 'الجزء الحادي عشر' },
            { day: 12, topic: 'Position', description: 'تعلم تحديد المواقع', goals: ['فهم static', 'معرفة relative', 'استخدام absolute, fixed, sticky'], tasks: ['تحديد مواقع العناصر', 'تجربة كل الأنواع', 'تطبيق عملي'], resources: ['📄 توثيق Position', '🎬 فيديو 12'], duration: 2, source: 'فيديو 12', part: 'الجزء الثاني عشر' },
            { day: 13, topic: 'Flexbox - الجزء الأول', description: 'تعلم أساسيات Flexbox', goals: ['فهم display:flex', 'معرفة flex-direction', 'استخدام justify-content'], tasks: ['إنشاء container flex', 'تغيير الاتجاه', 'محاذاة العناصر'], resources: ['📄 توثيق Flexbox', '🎬 فيديو 13'], duration: 2, source: 'فيديو 13', part: 'الجزء الثالث عشر' },
            { day: 14, topic: 'Flexbox - الجزء الثاني', description: 'تعلم المحاذاة المتقدمة', goals: ['فهم align-items', 'معرفة align-content', 'استخدام gap'], tasks: ['محاذاة رأسية', 'محاذاة أفقية', 'إضافة مسافات'], resources: ['📄 توثيق Flexbox 2', '🎬 فيديو 14'], duration: 2, source: 'فيديو 14', part: 'الجزء الرابع عشر' },
            { day: 15, topic: 'Flexbox - الجزء الثالث', description: 'تعلم flex-wrap و flex-grow', goals: ['فهم flex-wrap', 'معرفة flex-grow', 'استخدام flex-shrink'], tasks: ['التفاف العناصر', 'توسيع العناصر', 'تطبيق عملي'], resources: ['📄 توثيق Flexbox 3', '🎬 فيديو 15'], duration: 2, source: 'فيديو 15', part: 'الجزء الخامس عشر' },
            { day: 16, topic: 'Grid - الجزء الأول', description: 'تعلم أساسيات CSS Grid', goals: ['فهم display:grid', 'معرفة grid-template-columns', 'استخدام gap'], tasks: ['إنشاء شبكة', 'تحديد الأعمدة', 'إضافة مسافات'], resources: ['📄 توثيق Grid', '🎬 فيديو 16'], duration: 2, source: 'فيديو 16', part: 'الجزء السادس عشر' },
            { day: 17, topic: 'Grid - الجزء الثاني', description: 'تعلم grid-template-rows', goals: ['فهم grid-template-rows', 'معرفة grid-auto-rows', 'استخدام minmax'], tasks: ['تحديد الصفوف', 'استخدام minmax', 'تطبيق عملي'], resources: ['📄 توثيق Grid 2', '🎬 فيديو 17'], duration: 2, source: 'فيديو 17', part: 'الجزء السابع عشر' },
            { day: 18, topic: 'Grid - الجزء الثالث', description: 'تعلم grid-column و grid-row', goals: ['فهم grid-column', 'معرفة grid-row', 'استخدام grid-area'], tasks: ['تحديد موقع العناصر', 'دمج الخلايا', 'تطبيق عملي'], resources: ['📄 توثيق Grid 3', '🎬 فيديو 18'], duration: 2, source: 'فيديو 18', part: 'الجزء الثامن عشر' },
            { day: 19, topic: 'Responsive - Media Queries', description: 'تعلم التجاوب مع الشاشات', goals: ['فهم @media', 'معرفة min-width', 'استخدام max-width'], tasks: ['إضافة breakpoints', 'تغيير التصميم', 'تطبيق عملي'], resources: ['📄 توثيق Media', '🎬 فيديو 19'], duration: 2, source: 'فيديو 19', part: 'الجزء التاسع عشر' },
            { day: 20, topic: 'Responsive - Units', description: 'تعلم الوحدات المتجاوبة', goals: ['فهم rem', 'معرفة em', 'استخدام vh, vw, %'], tasks: ['استخدام وحدات مختلفة', 'تطبيق عملي', 'فهم الفرق'], resources: ['📄 توثيق Units', '🎬 فيديو 20'], duration: 2, source: 'فيديو 20', part: 'الجزء العشرون' },
            { day: 21, topic: 'Transitions و Transformations', description: 'تعلم الحركات والتحولات', goals: ['فهم transition', 'معرفة transform', 'استخدام scale, rotate, translate'], tasks: ['إضافة حركات', 'تدوير عناصر', 'تكبير وتصغير'], resources: ['📄 توثيق Transitions', '🎬 فيديو 21'], duration: 2, source: 'فيديو 21', part: 'الجزء الحادي والعشرون' },
            { day: 22, topic: 'Animations', description: 'تعلم عمل حركات متحركة', goals: ['فهم @keyframes', 'معرفة animation', 'استخدام animation-duration'], tasks: ['إنشاء حركة مخصصة', 'تطبيق animation', 'تطبيق عملي'], resources: ['📄 توثيق Animations', '🎬 فيديو 22'], duration: 2, source: 'فيديو 22', part: 'الجزء الثاني والعشرون' },
            { day: 23, topic: 'Pseudo-classes', description: 'تعلم الفئات الزائفة', goals: ['فهم :hover', 'معرفة :active', 'استخدام :nth-child'], tasks: ['تغيير التصميم عند التمرير', 'تغيير عند النقر', 'تنسيق حسب الترتيب'], resources: ['📄 توثيق Pseudo', '🎬 فيديو 23'], duration: 2, source: 'فيديو 23', part: 'الجزء الثالث والعشرون' },
            { day: 24, topic: 'Pseudo-elements', description: 'تعلم العناصر الزائفة', goals: ['فهم ::before', 'معرفة ::after', 'استخدام ::first-letter'], tasks: ['إضافة محتوى قبل العنصر', 'إضافة محتوى بعد العنصر', 'تنسيق أول حرف'], resources: ['📄 توثيق Pseudo-elements', '🎬 فيديو 24'], duration: 2, source: 'فيديو 24', part: 'الجزء الرابع والعشرون' },
            { day: 25, topic: 'CSS Variables', description: 'تعلم المتغيرات في CSS', goals: ['فهم custom properties', 'معرفة var()', 'استخدام :root'], tasks: ['تعريف متغيرات', 'استخدام المتغيرات', 'تطبيق عملي'], resources: ['📄 توثيق Variables', '🎬 فيديو 25'], duration: 2, source: 'فيديو 25', part: 'الجزء الخامس والعشرون' },
            { day: 26, topic: 'Shadow و Border-radius', description: 'تعلم الظلال والحواف المستديرة', goals: ['فهم box-shadow', 'معرفة border-radius', 'استخدام text-shadow'], tasks: ['إضافة ظلال للصناديق', 'تدوير الحواف', 'إضافة ظلال للنصوص'], resources: ['📄 توثيق Shadow', '🎬 فيديو 26'], duration: 2, source: 'فيديو 26', part: 'الجزء السادس والعشرون' },
            { day: 27, topic: 'Overflow و Z-index', description: 'تعلم التحكم في المحتوى الزائد', goals: ['فهم overflow', 'معرفة z-index', 'استخدام overflow-x, overflow-y'], tasks: ['إخفاء المحتوى الزائد', 'ترتيب الطبقات', 'تطبيق عملي'], resources: ['📄 توثيق Overflow', '🎬 فيديو 27'], duration: 2, source: 'فيديو 27', part: 'الجزء السابع والعشرون' },
            { day: 28, topic: 'Layout بـ Flexbox', description: 'بناء تخطيط كامل بـ Flexbox', goals: ['تطبيق كل مفاهيم Flexbox', 'بناء Header و Footer', 'بناء Sidebar و Main'], tasks: ['بناء صفحة كاملة بـ Flexbox', 'تجاوب مع الشاشات', 'تطبيق عملي'], resources: ['📄 تطبيق Flexbox', '🎬 مشروع'], duration: 2, source: 'تطبيق', part: 'الجزء الثامن والعشرون' },
            { day: 29, topic: 'Layout بـ Grid', description: 'بناء تخطيط كامل بـ Grid', goals: ['تطبيق كل مفاهيم Grid', 'بناء Header و Footer', 'بناء Sidebar و Main'], tasks: ['بناء صفحة كاملة بـ Grid', 'تجاوب مع الشاشات', 'تطبيق عملي'], resources: ['📄 تطبيق Grid', '🎬 مشروع'], duration: 2, source: 'تطبيق', part: 'الجزء التاسع والعشرون' },
            { day: 30, topic: 'مراجعة HTML+CSS', description: 'مراجعة كل مفاهيم الشهر الأول', goals: ['تثبيت المفاهيم', 'بناء مشروع Dashboard', 'تطبيق كل المهارات'], tasks: ['بناء لوحة تحكم', 'تطبيق Flexbox و Grid', 'تطبيق Responsive'], resources: ['📄 مراجعة', '🎬 مراجعة'], duration: 2, source: 'مراجعة', part: 'الجزء الثلاثون' }
        ]
    },
    month2: {
        name: '⚡ الشهر الثاني: JavaScript',
        days: [
            { day: 31, topic: 'مقدمة في JS', description: 'تعلم أساسيات JavaScript', goals: ['فهم المتغيرات', 'معرفة var, let, const', 'كتابة أول كود'], tasks: ['إنشاء ملف JS', 'كتابة متغيرات', 'طباعة في console'], resources: ['📄 توثيق JS', '🎬 فيديو 31'], duration: 2, source: 'فيديو 31', part: 'الجزء الأول' },
            { day: 32, topic: 'أنواع البيانات', description: 'تعلم أنواع البيانات في JS', goals: ['فهم string', 'معرفة number', 'استخدام boolean, null, undefined'], tasks: ['تجربة كل نوع', 'التحويل بين الأنواع', 'تطبيق عملي'], resources: ['📄 توثيق Data Types', '🎬 فيديو 32'], duration: 2, source: 'فيديو 32', part: 'الجزء الثاني' },
            { day: 33, topic: 'Operators', description: 'تعلم العوامل في JS', goals: ['فهم arithmetic', 'معرفة comparison', 'استخدام logical'], tasks: ['تجربة العمليات الحسابية', 'المقارنات', 'العوامل المنطقية'], resources: ['📄 توثيق Operators', '🎬 فيديو 33'], duration: 2, source: 'فيديو 33', part: 'الجزء الثالث' },
            { day: 34, topic: 'Conditions', description: 'تعلم الشروط في JS', goals: ['فهم if, else', 'معرفة else if', 'استخدام switch'], tasks: ['كتابة شروط if', 'استخدام else if', 'تطبيق switch'], resources: ['📄 توثيق Conditions', '🎬 فيديو 34'], duration: 2, source: 'فيديو 34', part: 'الجزء الرابع' },
            { day: 35, topic: 'Loops', description: 'تعلم الحلقات التكرارية', goals: ['فهم for', 'معرفة while', 'استخدام do-while'], tasks: ['كتابة حلقة for', 'حلقة while', 'تطبيق عملي'], resources: ['📄 توثيق Loops', '🎬 فيديو 35'], duration: 2, source: 'فيديو 35', part: 'الجزء الخامس' },
            { day: 36, topic: 'Functions - الجزء الأول', description: 'تعلم الدوال في JS', goals: ['فهم declaration', 'معرفة expression', 'استخدام parameters'], tasks: ['كتابة دالة', 'استدعاء دالة', 'تمرير parameters'], resources: ['📄 توثيق Functions', '🎬 فيديو 36'], duration: 2, source: 'فيديو 36', part: 'الجزء السادس' },
            { day: 37, topic: 'Functions - الجزء الثاني', description: 'تعلم arrow functions', goals: ['فهم arrow functions', 'معرفة return', 'استخدام this'], tasks: ['كتابة arrow function', 'مقارنة مع regular', 'تطبيق عملي'], resources: ['📄 توثيق Arrow', '🎬 فيديو 37'], duration: 2, source: 'فيديو 37', part: 'الجزء السابع' },
            { day: 38, topic: 'Arrays - الجزء الأول', description: 'تعلم المصفوفات', goals: ['فهم push, pop', 'معرفة shift, unshift', 'استخدام length'], tasks: ['إنشاء مصفوفة', 'إضافة وحذف عناصر', 'الوصول للعناصر'], resources: ['📄 توثيق Arrays', '🎬 فيديو 38'], duration: 2, source: 'فيديو 38', part: 'الجزء الثامن' },
            { day: 39, topic: 'Arrays - الجزء الثاني', description: 'تعلم map, filter, reduce', goals: ['فهم map', 'معرفة filter', 'استخدام reduce'], tasks: ['استخدام map', 'استخدام filter', 'استخدام reduce'], resources: ['📄 توثيق Array Methods', '🎬 فيديو 39'], duration: 2, source: 'فيديو 39', part: 'الجزء التاسع' },
            { day: 40, topic: 'Objects - الجزء الأول', description: 'تعلم الكائنات', goals: ['فهم creation', 'معرفة properties', 'استخدام methods'], tasks: ['إنشاء كائن', 'إضافة خصائص', 'إضافة دوال'], resources: ['📄 توثيق Objects', '🎬 فيديو 40'], duration: 2, source: 'فيديو 40', part: 'الجزء العاشر' },
            { day: 41, topic: 'Objects - الجزء الثاني', description: 'تعلم destructuring و spread', goals: ['فهم destructuring', 'معرفة spread', 'استخدام rest'], tasks: ['تطبيق destructuring', 'استخدام spread', 'تطبيق عملي'], resources: ['📄 توثيق Destructuring', '🎬 فيديو 41'], duration: 2, source: 'فيديو 41', part: 'الجزء الحادي عشر' },
            { day: 42, topic: 'DOM - الجزء الأول', description: 'تعلم التعامل مع DOM', goals: ['فهم getElementById', 'معرفة querySelector', 'استخدام querySelectorAll'], tasks: ['اختيار عناصر', 'تغيير محتوى', 'تطبيق عملي'], resources: ['📄 توثيق DOM', '🎬 فيديو 42'], duration: 2, source: 'فيديو 42', part: 'الجزء الثاني عشر' },
            { day: 43, topic: 'DOM - الجزء الثاني', description: 'تعلم إنشاء عناصر', goals: ['فهم createElement', 'معرفة appendChild', 'استخدام innerHTML'], tasks: ['إنشاء عناصر', 'إضافتها للصفحة', 'تطبيق عملي'], resources: ['📄 توثيق DOM 2', '🎬 فيديو 43'], duration: 2, source: 'فيديو 43', part: 'الجزء الثالث عشر' },
            { day: 44, topic: 'DOM - الجزء الثالث', description: 'تعلم classList و style', goals: ['فهم classList', 'معرفة style', 'استخدام dataset'], tasks: ['تغيير كلاسات', 'تغيير styles', 'استخدام dataset'], resources: ['📄 توثيق DOM 3', '🎬 فيديو 44'], duration: 2, source: 'فيديو 44', part: 'الجزء الرابع عشر' },
            { day: 45, topic: 'Events - الجزء الأول', description: 'تعلم الأحداث', goals: ['فهم addEventListener', 'معرفة click', 'استخدام mouseover'], tasks: ['إضافة حدث click', 'حدث mouseover', 'تطبيق عملي'], resources: ['📄 توثيق Events', '🎬 فيديو 45'], duration: 2, source: 'فيديو 45', part: 'الجزء الخامس عشر' },
            { day: 46, topic: 'Events - الجزء الثاني', description: 'تعلم أحداث keyboard و form', goals: ['فهم keydown', 'معرفة submit', 'استخدام change, input'], tasks: ['التعامل مع keyboard', 'التعامل مع forms', 'تطبيق عملي'], resources: ['📄 توثيق Events 2', '🎬 فيديو 46'], duration: 2, source: 'فيديو 46', part: 'الجزء السادس عشر' },
            { day: 47, topic: 'Events - الجزء الثالث', description: 'تعلم event delegation', goals: ['فهم delegation', 'معرفة preventDefault', 'استخدام stopPropagation'], tasks: ['تطبيق delegation', 'منع السلوك الافتراضي', 'تطبيق عملي'], resources: ['📄 توثيق Delegation', '🎬 فيديو 47'], duration: 2, source: 'فيديو 47', part: 'الجزء السابع عشر' },
            { day: 48, topic: 'Timers', description: 'تعلم setTimeout و setInterval', goals: ['فهم setTimeout', 'معرفة setInterval', 'استخدام clearInterval'], tasks: ['تطبيق setTimeout', 'تطبيق setInterval', 'إيقاف المؤقت'], resources: ['📄 توثيق Timers', '🎬 فيديو 48'], duration: 2, source: 'فيديو 48', part: 'الجزء الثامن عشر' },
            { day: 49, topic: 'JSON', description: 'تعلم JSON', goals: ['فهم stringify', 'معرفة parse', 'استخدام مع objects'], tasks: ['تحويل object لـ JSON', 'تحويل JSON لـ object', 'تطبيق عملي'], resources: ['📄 توثيق JSON', '🎬 فيديو 49'], duration: 2, source: 'فيديو 49', part: 'الجزء التاسع عشر' },
            { day: 50, topic: 'Local Storage', description: 'تعلم التخزين المحلي', goals: ['فهم setItem', 'معرفة getItem', 'استخدام removeItem'], tasks: ['تخزين بيانات', 'استرجاع بيانات', 'حذف بيانات'], resources: ['📄 توثيق Storage', '🎬 فيديو 50'], duration: 2, source: 'فيديو 50', part: 'الجزء العشرون' },
            { day: 51, topic: 'Local Storage المتقدم', description: 'تخزين objects و arrays', goals: ['تخزين objects', 'تخزين arrays', 'استرجاع complex data'], tasks: ['تخزين object مع JSON', 'تخزين array', 'استرجاع وتحويل'], resources: ['📄 توثيق Storage 2', '🎬 فيديو 51'], duration: 2, source: 'فيديو 51', part: 'الجزء الحادي والعشرون' },
            { day: 52, topic: 'Fetch API - GET', description: 'تعلم جلب البيانات', goals: ['فهم fetch', 'معرفة GET', 'استخدام then'], tasks: ['جلب بيانات من API', 'عرض البيانات', 'تطبيق عملي'], resources: ['📄 توثيق Fetch', '🎬 فيديو 52'], duration: 2, source: 'فيديو 52', part: 'الجزء الثاني والعشرون' },
            { day: 53, topic: 'Fetch API - POST', description: 'تعلم إرسال البيانات', goals: ['فهم POST', 'معرفة PUT', 'استخدام DELETE'], tasks: ['إرسال بيانات', 'تحديث بيانات', 'حذف بيانات'], resources: ['📄 توثيق Fetch 2', '🎬 فيديو 53'], duration: 2, source: 'فيديو 53', part: 'الجزء الثالث والعشرون' },
            { day: 54, topic: 'Async/Await', description: 'تعلم Async/Await', goals: ['فهم async', 'معرفة await', 'استخدام try/catch'], tasks: ['كتابة async function', 'استخدام await', 'معالجة الأخطاء'], resources: ['📄 توثيق Async', '🎬 فيديو 54'], duration: 2, source: 'فيديو 54', part: 'الجزء الرابع والعشرون' },
            { day: 55, topic: 'Error Handling', description: 'تعلم معالجة الأخطاء', goals: ['فهم try', 'معرفة catch', 'استخدام finally, throw'], tasks: ['تجربة try/catch', 'رمي أخطاء', 'تطبيق عملي'], resources: ['📄 توثيق Errors', '🎬 فيديو 55'], duration: 2, source: 'فيديو 55', part: 'الجزء الخامس والعشرون' },
            { day: 56, topic: 'Modules', description: 'تعلم وحدات JS', goals: ['فهم import', 'معرفة export', 'استخدام default'], tasks: ['تصدير دوال', 'استيراد دوال', 'تطبيق عملي'], resources: ['📄 توثيق Modules', '🎬 فيديو 56'], duration: 2, source: 'فيديو 56', part: 'الجزء السادس والعشرون' },
            { day: 57, topic: 'Date و Time', description: 'تعلم التعامل مع الوقت', goals: ['فهم new Date()', 'معرفة toLocaleString', 'استخدام get methods'], tasks: ['إنشاء تاريخ', 'تنسيق تاريخ', 'حساب فرق التواريخ'], resources: ['📄 توثيق Date', '🎬 فيديو 57'], duration: 2, source: 'فيديو 57', part: 'الجزء السابع والعشرون' },
            { day: 58, topic: 'Regular Expressions', description: 'تعلم التعبيرات النمطية', goals: ['فهم regex', 'معرفة test', 'استخدام match'], tasks: ['كتابة regex', 'اختبار نص', 'استخراج بيانات'], resources: ['📄 توثيق Regex', '🎬 فيديو 58'], duration: 2, source: 'فيديو 58', part: 'الجزء الثامن والعشرون' },
            { day: 59, topic: 'Web APIs', description: 'تعلم Web APIs', goals: ['فهم Notification', 'معرفة Clipboard', 'استخدام Geolocation'], tasks: ['إشعارات المتصفح', 'نسخ ولصق', 'موقع المستخدم'], resources: ['📄 توثيق Web APIs', '🎬 فيديو 59'], duration: 2, source: 'فيديو 59', part: 'الجزء التاسع والعشرون' },
            { day: 60, topic: 'مراجعة JavaScript', description: 'مراجعة كل مفاهيم JS', goals: ['تثبيت المفاهيم', 'مشروع متكامل', 'تطبيق كل المهارات'], tasks: ['بناء مشروع JS كامل', 'تطبيق كل ما تعلمته', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 مشروع'], duration: 2, source: 'مراجعة', part: 'الجزء الثلاثون' }
        ]
    },
    month3: {
        name: '🔀 الشهر الثالث: Git + Bootstrap + مشاريع',
        days: [
            { day: 61, topic: 'مقدمة في Git', description: 'تعلم أساسيات Git', goals: ['فهم init', 'معرفة add', 'استخدام commit, status'], tasks: ['تهيئة repo', 'إضافة ملفات', 'عمل commit'], resources: ['📄 توثيق Git', '🎬 فيديو 61'], duration: 2, source: 'فيديو 61', part: 'الجزء الأول' },
            { day: 62, topic: 'Git - الفروع', description: 'تعلم فروع Git', goals: ['فهم branch', 'معرفة checkout', 'استخدام merge'], tasks: ['إنشاء فرع', 'التبديل بين الفروع', 'دمج الفروع'], resources: ['📄 توثيق Branches', '🎬 فيديو 62'], duration: 2, source: 'فيديو 62', part: 'الجزء الثاني' },
            { day: 63, topic: 'GitHub', description: 'تعلم GitHub', goals: ['فهم remote', 'معرفة push', 'استخدام pull, clone'], tasks: ['ربط مع GitHub', 'رفع التغييرات', 'سحب التغييرات'], resources: ['📄 توثيق GitHub', '🎬 فيديو 63'], duration: 2, source: 'فيديو 63', part: 'الجزء الثالث' },
            { day: 64, topic: 'مقدمة Bootstrap', description: 'تعلم أساسيات Bootstrap', goals: ['فهم CDN', 'معرفة grid system', 'استخدام containers'], tasks: ['ربط Bootstrap', 'استخدام grid', 'تطبيق عملي'], resources: ['📄 توثيق Bootstrap', '🎬 فيديو 64'], duration: 2, source: 'فيديو 64', part: 'الجزء الرابع' },
            { day: 65, topic: 'Bootstrap - المكونات', description: 'تعلم مكونات Bootstrap', goals: ['فهم buttons', 'معرفة cards', 'استخدام navbars'], tasks: ['إضافة أزرار', 'إنشاء بطاقات', 'إنشاء شريط تنقل'], resources: ['📄 توثيق Components', '🎬 فيديو 65'], duration: 2, source: 'فيديو 65', part: 'الجزء الخامس' },
            { day: 66, topic: 'Bootstrap - النماذج', description: 'تعلم نماذج Bootstrap', goals: ['فهم forms', 'معرفة inputs', 'استخدام validation'], tasks: ['إنشاء نموذج', 'تنسيق inputs', 'إضافة validation'], resources: ['📄 توثيق Forms', '🎬 فيديو 66'], duration: 2, source: 'فيديو 66', part: 'الجزء السادس' },
            { day: 67, topic: 'Bootstrap المتقدم', description: 'تعلم modals و carousel', goals: ['فهم modals', 'معرفة carousel', 'استخدام accordion'], tasks: ['إضافة modals', 'إنشاء carousel', 'إنشاء accordion'], resources: ['📄 توثيق Advanced', '🎬 فيديو 67'], duration: 2, source: 'فيديو 67', part: 'الجزء السابع' },
            { day: 68, topic: 'مشروع: تحسين المنصة', description: 'تطبيق Bootstrap على المنصة', goals: ['تطبيق grid', 'استخدام components', 'تحسين التصميم'], tasks: ['تحسين واجهة المنصة', 'إضافة Bootstrap', 'تطبيق عملي'], resources: ['📄 مشروع', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الثامن' },
            { day: 69, topic: 'مشروع: Calculator', description: 'بناء آلة حاسبة', goals: ['تطبيق HTML+CSS+JS', 'معرفة DOM', 'استخدام events'], tasks: ['بناء آلة حاسبة', 'تطبيق عمليات', 'تطبيق عملي'], resources: ['📄 مشروع Calculator', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء التاسع' },
            { day: 70, topic: 'مشروع: To-Do List', description: 'بناء قائمة مهام', goals: ['تطبيق Local Storage', 'معرفة CRUD', 'استخدام events'], tasks: ['بناء To-Do List', 'إضافة وحذف مهام', 'حفظ في Local Storage'], resources: ['📄 مشروع Todo', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء العاشر' },
            { day: 71, topic: 'مشروع: Weather App', description: 'بناء تطبيق الطقس', goals: ['تطبيق Fetch API', 'معرفة JSON', 'استخدام async/await'], tasks: ['جلب بيانات الطقس', 'عرض البيانات', 'تطبيق عملي'], resources: ['📄 مشروع Weather', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الحادي عشر' },
            { day: 72, topic: 'مشروع: Quiz App', description: 'بناء تطبيق أسئلة', goals: ['تطبيق Objects', 'معرفة Arrays', 'استخدام DOM'], tasks: ['بناء أسئلة', 'تتبع النقاط', 'تطبيق عملي'], resources: ['📄 مشروع Quiz', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الثاني عشر' },
            { day: 73, topic: 'مشروع: Pomodoro Timer', description: 'بناء مؤقت بومودورو', goals: ['تطبيق Timers', 'معرفة Events', 'استخدام setInterval'], tasks: ['بناء مؤقت 25/5', 'تطبيق التحكم', 'تطبيق عملي'], resources: ['📄 مشروع Timer', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الثالث عشر' },
            { day: 74, topic: 'مشروع: Notes App', description: 'بناء تطبيق ملاحظات', goals: ['تطبيق Local Storage', 'معرفة CRUD', 'استخدام DOM'], tasks: ['بناء Notes App', 'إضافة وحذف ملاحظات', 'حفظ في Local Storage'], resources: ['📄 مشروع Notes', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الرابع عشر' },
            { day: 75, topic: 'مراجعة وتطوير', description: 'تطوير المنصة الرئيسية', goals: ['تحسين المنصة', 'إضافة ميزات', 'تطبيق كل المهارات'], tasks: ['تطوير المنصة', 'إضافة ميزات جديدة', 'تطبيق عملي'], resources: ['📄 تطوير', '🎬 مراجعة'], duration: 2, source: 'مراجعة', part: 'الجزء الخامس عشر' },
            { day: 76, topic: 'تحسين الأداء', description: 'تعلم تحسين الأداء', goals: ['فهم lazy loading', 'معرفة debounce', 'استخدام throttle'], tasks: ['تطبيق lazy loading', 'تطبيق debounce', 'تطبيق throttle'], resources: ['📄 توثيق Performance', '🎬 فيديو 76'], duration: 2, source: 'فيديو 76', part: 'الجزء السادس عشر' },
            { day: 77, topic: 'Accessibility', description: 'تعلم إمكانية الوصول', goals: ['فهم ARIA', 'معرفة tabindex', 'استخدام semantic'], tasks: ['إضافة ARIA', 'تحسين التنقل', 'تطبيق عملي'], resources: ['📄 توثيق A11y', '🎬 فيديو 77'], duration: 2, source: 'فيديو 77', part: 'الجزء السابع عشر' },
            { day: 78, topic: 'SEO Basics', description: 'تعلم تحسين محركات البحث', goals: ['فهم meta tags', 'معرفة Open Graph', 'استخدام structured data'], tasks: ['إضافة meta tags', 'إضافة Open Graph', 'تطبيق عملي'], resources: ['📄 توثيق SEO', '🎬 فيديو 78'], duration: 2, source: 'فيديو 78', part: 'الجزء الثامن عشر' },
            { day: 79, topic: 'PWA Basics', description: 'تعلم أساسيات PWA', goals: ['فهم manifest', 'معرفة service worker', 'استخدام offline'], tasks: ['إنشاء manifest', 'إضافة service worker', 'تطبيق offline'], resources: ['📄 توثيق PWA', '🎬 فيديو 79'], duration: 2, source: 'فيديو 79', part: 'الجزء التاسع عشر' },
            { day: 80, topic: 'مشروع: PWA للمنصة', description: 'تحويل المنصة لـ PWA', goals: ['تطبيق manifest', 'معرفة service worker', 'استخدام offline'], tasks: ['تحويل المنصة لـ PWA', 'تطبيق offline', 'تطبيق عملي'], resources: ['📄 مشروع PWA', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء العشرون' },
            { day: 81, topic: 'مراجعة JavaScript', description: 'مراجعة متقدمة لـ JS', goals: ['تثبيت المفاهيم', 'حل مشاكل شائعة', 'تطبيق عملي'], tasks: ['مراجعة JS', 'حل مشاكل', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 فيديو 81'], duration: 2, source: 'مراجعة', part: 'الجزء الحادي والعشرون' },
            { day: 82, topic: 'Debugging', description: 'تعلم تصحيح الأخطاء', goals: ['فهم console', 'معرفة breakpoints', 'استخدام debugger'], tasks: ['استخدام console', 'إضافة breakpoints', 'استخدام debugger'], resources: ['📄 توثيق Debug', '🎬 فيديو 82'], duration: 2, source: 'فيديو 82', part: 'الجزء الثاني والعشرون' },
            { day: 83, topic: 'Dark Mode للمنصة', description: 'إضافة الثيم الداكن', goals: ['تطبيق CSS variables', 'معرفة data-theme', 'استخدام localStorage'], tasks: ['إضافة Dark Mode', 'تطبيق التبديل', 'حفظ التفضيل'], resources: ['📄 توثيق Dark Mode', '🎬 فيديو 83'], duration: 2, source: 'تطبيق', part: 'الجزء الثالث والعشرون' },
            { day: 84, topic: 'تحسينات UI/UX', description: 'تحسين واجهة المستخدم', goals: ['تحسين التصميم', 'إضافة animations', 'تحسين التجربة'], tasks: ['تحسين UI', 'إضافة animations', 'تطبيق عملي'], resources: ['📄 توثيق UI/UX', '🎬 فيديو 84'], duration: 2, source: 'تطبيق', part: 'الجزء الرابع والعشرون' },
            { day: 85, topic: 'مشروع: Memory Game', description: 'بناء لعبة الذاكرة', goals: ['تطبيق Arrays', 'معرفة DOM', 'استخدام Events'], tasks: ['بناء لعبة الذاكرة', 'تطبيق المنطق', 'تطبيق عملي'], resources: ['📄 مشروع Memory', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الخامس والعشرون' },
            { day: 86, topic: 'مشروع: Tic-Tac-Toe', description: 'بناء لعبة إكس أو', goals: ['تطبيق DOM', 'معرفة Events', 'استخدام منطق اللعبة'], tasks: ['بناء Tic-Tac-Toe', 'تطبيق المنطق', 'تطبيق عملي'], resources: ['📄 مشروع TicTacToe', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء السادس والعشرون' },
            { day: 87, topic: 'مشروع: Calculator متقدم', description: 'بناء آلة حاسبة علمية', goals: ['تطبيق JS متقدم', 'معرفة Math', 'استخدام DOM'], tasks: ['بناء آلة حاسبة علمية', 'تطبيق العمليات المتقدمة', 'تطبيق عملي'], resources: ['📄 مشروع Calculator Pro', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء السابع والعشرون' },
            { day: 88, topic: 'مشروع: Dashboard تحليلات', description: 'بناء لوحة تحكم مع charts', goals: ['تطبيق DOM', 'معرفة CSS Grid', 'استخدام data visualization'], tasks: ['بناء Dashboard', 'إضافة charts', 'تطبيق عملي'], resources: ['📄 مشروع Dashboard', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الثامن والعشرون' },
            { day: 89, topic: 'مراجعة عامة', description: 'مراجعة كل مشاريع الشهر', goals: ['تثبيت المفاهيم', 'مراجعة المشاريع', 'تطبيق عملي'], tasks: ['مراجعة المشاريع', 'تحسين الأكواد', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 مراجعة'], duration: 2, source: 'مراجعة', part: 'الجزء التاسع والعشرون' },
            { day: 90, topic: 'اختبار وتقييم', description: 'تقييم مستوى Frontend', goals: ['اختبار المهارات', 'تقييم المستوى', 'تحديد نقاط الضعف'], tasks: ['إجراء اختبار', 'تقييم النتائج', 'تطبيق عملي'], resources: ['📄 اختبار', '🎬 تقييم'], duration: 2, source: 'اختبار', part: 'الجزء الثلاثون' }
        ]
    },
    month4: {
        name: '🔷 الشهر الرابع: C# + OOP + SQL',
        days: [
            { day: 91, topic: 'مقدمة في C#', description: 'تعلم أساسيات C#', goals: ['فهم .NET', 'معرفة console', 'استخدام basic syntax'], tasks: ['إنشاء مشروع C#', 'كتابة Hello World', 'تطبيق عملي'], resources: ['📄 توثيق C#', '🎬 فيديو 91'], duration: 2, source: 'فيديو 91', part: 'الجزء الأول' },
            { day: 92, topic: 'المتغيرات والأنواع', description: 'تعلم المتغيرات في C#', goals: ['فهم int', 'معرفة string', 'استخدام bool, double, var'], tasks: ['تعريف متغيرات', 'تجربة الأنواع', 'تطبيق عملي'], resources: ['📄 توثيق Variables', '🎬 فيديو 92'], duration: 2, source: 'فيديو 92', part: 'الجزء الثاني' },
            { day: 93, topic: 'Operators في C#', description: 'تعلم العوامل في C#', goals: ['فهم arithmetic', 'معرفة comparison', 'استخدام logical'], tasks: ['تجربة العمليات', 'المقارنات', 'العوامل المنطقية'], resources: ['📄 توثيق Operators', '🎬 فيديو 93'], duration: 2, source: 'فيديو 93', part: 'الجزء الثالث' },
            { day: 94, topic: 'Conditions', description: 'تعلم الشروط في C#', goals: ['فهم if, else', 'معرفة else if', 'استخدام switch'], tasks: ['كتابة if', 'استخدام else if', 'تطبيق switch'], resources: ['📄 توثيق Conditions', '🎬 فيديو 94'], duration: 2, source: 'فيديو 94', part: 'الجزء الرابع' },
            { day: 95, topic: 'Loops', description: 'تعلم الحلقات في C#', goals: ['فهم for', 'معرفة while', 'استخدام foreach'], tasks: ['كتابة for', 'كتابة while', 'استخدام foreach'], resources: ['📄 توثيق Loops', '🎬 فيديو 95'], duration: 2, source: 'فيديو 95', part: 'الجزء الخامس' },
            { day: 96, topic: 'Arrays في C#', description: 'تعلم المصفوفات', goals: ['فهم declaration', 'معرفة methods', 'استخدام loops'], tasks: ['إنشاء مصفوفة', 'التعامل معها', 'تطبيق عملي'], resources: ['📄 توثيق Arrays', '🎬 فيديو 96'], duration: 2, source: 'فيديو 96', part: 'الجزء السادس' },
            { day: 97, topic: 'Lists و Collections', description: 'تعلم القوائم والمجموعات', goals: ['فهم List', 'معرفة Dictionary', 'استخدام HashSet'], tasks: ['استخدام List', 'استخدام Dictionary', 'استخدام HashSet'], resources: ['📄 توثيق Collections', '🎬 فيديو 97'], duration: 2, source: 'فيديو 97', part: 'الجزء السابع' },
            { day: 98, topic: 'OOP - Classes', description: 'تعلم الكلاسات في C#', goals: ['فهم class', 'معرفة object', 'استخدام constructor'], tasks: ['إنشاء class', 'إنشاء object', 'استخدام constructor'], resources: ['📄 توثيق Classes', '🎬 فيديو 98'], duration: 2, source: 'فيديو 98', part: 'الجزء الثامن' },
            { day: 99, topic: 'OOP - Encapsulation', description: 'تعلم التغليف', goals: ['فهم public', 'معرفة private', 'استخدام getters, setters'], tasks: ['تطبيق encapsulation', 'استخدام properties', 'تطبيق عملي'], resources: ['📄 توثيق Encapsulation', '🎬 فيديو 99'], duration: 2, source: 'فيديو 99', part: 'الجزء التاسع' },
            { day: 100, topic: 'OOP - Inheritance', description: 'تعلم الوراثة', goals: ['فهم base', 'معرفة derived', 'استخدام override'], tasks: ['تطبيق inheritance', 'استخدام override', 'تطبيق عملي'], resources: ['📄 توثيق Inheritance', '🎬 فيديو 100'], duration: 2, source: 'فيديو 100', part: 'الجزء العاشر' },
            { day: 101, topic: 'OOP - Polymorphism', description: 'تعلم تعدد الأشكال', goals: ['فهم virtual', 'معرفة override', 'استخدام abstract'], tasks: ['تطبيق polymorphism', 'استخدام abstract', 'تطبيق عملي'], resources: ['📄 توثيق Polymorphism', '🎬 فيديو 101'], duration: 2, source: 'فيديو 101', part: 'الجزء الحادي عشر' },
            { day: 102, topic: 'OOP - Interfaces', description: 'تعلم الواجهات', goals: ['فهم interface', 'معرفة implements', 'استخدام multiple interfaces'], tasks: ['إنشاء interface', 'تطبيقه', 'تطبيق عملي'], resources: ['📄 توثيق Interfaces', '🎬 فيديو 102'], duration: 2, source: 'فيديو 102', part: 'الجزء الثاني عشر' },
            { day: 103, topic: 'LINQ - الجزء الأول', description: 'تعلم LINQ الأساسي', goals: ['فهم Where', 'معرفة Select', 'استخدام OrderBy'], tasks: ['استخدام Where', 'استخدام Select', 'استخدام OrderBy'], resources: ['📄 توثيق LINQ', '🎬 فيديو 103'], duration: 2, source: 'فيديو 103', part: 'الجزء الثالث عشر' },
            { day: 104, topic: 'LINQ - الجزء الثاني', description: 'تعلم LINQ المتقدم', goals: ['فهم GroupBy', 'معرفة Join', 'استخدام Aggregate'], tasks: ['استخدام GroupBy', 'استخدام Join', 'استخدام Aggregate'], resources: ['📄 توثيق LINQ 2', '🎬 فيديو 104'], duration: 2, source: 'فيديو 104', part: 'الجزء الرابع عشر' },
            { day: 105, topic: 'Exception Handling', description: 'تعلم معالجة الأخطاء', goals: ['فهم try', 'معرفة catch', 'استخدام finally, throw'], tasks: ['تطبيق try/catch', 'رمي أخطاء', 'تطبيق عملي'], resources: ['📄 توثيق Exceptions', '🎬 فيديو 105'], duration: 2, source: 'فيديو 105', part: 'الجزء الخامس عشر' },
            { day: 106, topic: 'File I/O', description: 'تعلم التعامل مع الملفات', goals: ['فهم File', 'معرفة StreamReader', 'استخدام StreamWriter'], tasks: ['قراءة ملف', 'كتابة ملف', 'تطبيق عملي'], resources: ['📄 توثيق File I/O', '🎬 فيديو 106'], duration: 2, source: 'فيديو 106', part: 'الجزء السادس عشر' },
            { day: 107, topic: 'مقدمة في SQL', description: 'تعلم أساسيات SQL', goals: ['فهم database', 'معرفة tables', 'استخدام data types'], tasks: ['إنشاء قاعدة بيانات', 'إنشاء جداول', 'تطبيق عملي'], resources: ['📄 توثيق SQL', '🎬 فيديو 107'], duration: 2, source: 'فيديو 107', part: 'الجزء السابع عشر' },
            { day: 108, topic: 'SQL - SELECT', description: 'تعلم جلب البيانات', goals: ['فهم SELECT', 'معرفة WHERE', 'استخدام ORDER BY'], tasks: ['كتابة SELECT', 'استخدام WHERE', 'استخدام ORDER BY'], resources: ['📄 توثيق SELECT', '🎬 فيديو 108'], duration: 2, source: 'فيديو 108', part: 'الجزء الثامن عشر' },
            { day: 109, topic: 'SQL - INSERT, UPDATE, DELETE', description: 'تعلم تعديل البيانات', goals: ['فهم INSERT', 'معرفة UPDATE', 'استخدام DELETE'], tasks: ['إدراج بيانات', 'تحديث بيانات', 'حذف بيانات'], resources: ['📄 توثيق DML', '🎬 فيديو 109'], duration: 2, source: 'فيديو 109', part: 'الجزء التاسع عشر' },
            { day: 110, topic: 'SQL - JOIN', description: 'تعلم ربط الجداول', goals: ['فهم INNER JOIN', 'معرفة LEFT JOIN', 'استخدام RIGHT JOIN'], tasks: ['تطبيق INNER JOIN', 'تطبيق LEFT JOIN', 'تطبيق عملي'], resources: ['📄 توثيق JOIN', '🎬 فيديو 110'], duration: 2, source: 'فيديو 110', part: 'الجزء العشرون' },
            { day: 111, topic: 'SQL - Aggregations', description: 'تعلم الدوال التجميعية', goals: ['فهم COUNT', 'معرفة SUM', 'استخدام AVG, GROUP BY'], tasks: ['استخدام COUNT', 'استخدام SUM', 'استخدام GROUP BY'], resources: ['📄 توثيق Aggregations', '🎬 فيديو 111'], duration: 2, source: 'فيديو 111', part: 'الجزء الحادي والعشرون' },
            { day: 112, topic: 'SQL - Subqueries', description: 'تعلم الاستعلامات المتداخلة', goals: ['فهم subquery', 'معرفة nested queries', 'استخدام EXISTS'], tasks: ['كتابة subquery', 'استخدام EXISTS', 'تطبيق عملي'], resources: ['📄 توثيق Subqueries', '🎬 فيديو 112'], duration: 2, source: 'فيديو 112', part: 'الجزء الثاني والعشرون' },
            { day: 113, topic: 'SQL - Indexes', description: 'تعلم الفهارس', goals: ['فهم index', 'معرفة performance', 'استخدام CREATE INDEX'], tasks: ['إنشاء index', 'تحسين الأداء', 'تطبيق عملي'], resources: ['📄 توثيق Indexes', '🎬 فيديو 113'], duration: 2, source: 'فيديو 113', part: 'الجزء الثالث والعشرون' },
            { day: 114, topic: 'SQL - Views', description: 'تعلم الـ Views', goals: ['فهم CREATE VIEW', 'معرفة DROP VIEW', 'استخدام views'], tasks: ['إنشاء view', 'استخدام view', 'تطبيق عملي'], resources: ['📄 توثيق Views', '🎬 فيديو 114'], duration: 2, source: 'فيديو 114', part: 'الجزء الرابع والعشرون' },
            { day: 115, topic: 'SQL - Stored Procedures', description: 'تعلم الإجراءات المخزنة', goals: ['فهم CREATE PROCEDURE', 'معرفة parameters', 'استخدام EXEC'], tasks: ['إنشاء procedure', 'استخدام parameters', 'تنفيذ procedure'], resources: ['📄 توثيق Procedures', '🎬 فيديو 115'], duration: 2, source: 'فيديو 115', part: 'الجزء الخامس والعشرون' },
            { day: 116, topic: 'SQL - Transactions', description: 'تعلم المعاملات', goals: ['فهم BEGIN', 'معرفة COMMIT', 'استخدام ROLLBACK'], tasks: ['تطبيق transaction', 'استخدام COMMIT', 'استخدام ROLLBACK'], resources: ['📄 توثيق Transactions', '🎬 فيديو 116'], duration: 2, source: 'فيديو 116', part: 'الجزء السادس والعشرون' },
            { day: 117, topic: 'مشروع SQL', description: 'تصميم قاعدة بيانات للمنصة', goals: ['تصميم DB', 'إنشاء tables', 'كتابة queries'], tasks: ['تصميم قاعدة بيانات', 'إنشاء الجداول', 'كتابة استعلامات'], resources: ['📄 مشروع SQL', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء السابع والعشرون' },
            { day: 118, topic: 'مشروع C#', description: 'تطبيق Console لإدارة البيانات', goals: ['تطبيق C#', 'معرفة Console', 'استخدام Collections'], tasks: ['بناء تطبيق Console', 'إدارة البيانات', 'تطبيق عملي'], resources: ['📄 مشروع C#', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الثامن والعشرون' },
            { day: 119, topic: 'مراجعة C#', description: 'مراجعة مفاهيم C#', goals: ['تثبيت المفاهيم', 'مراجعة OOP', 'تطبيق عملي'], tasks: ['مراجعة C#', 'حل مشاكل', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 فيديو 119'], duration: 2, source: 'مراجعة', part: 'الجزء التاسع والعشرون' },
            { day: 120, topic: 'مراجعة SQL', description: 'مراجعة مفاهيم SQL', goals: ['تثبيت المفاهيم', 'مراجعة queries', 'تطبيق عملي'], tasks: ['مراجعة SQL', 'كتابة queries', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 فيديو 120'], duration: 2, source: 'مراجعة', part: 'الجزء الثلاثون' }
        ]
    },
    month5: {
        name: '⚙️ الشهر الخامس: ASP.NET Core + EF',
        days: [
            { day: 121, topic: 'مقدمة ASP.NET Core', description: 'تعلم أساسيات ASP.NET Core', goals: ['فهم project structure', 'معرفة Program.cs', 'استخدام Startup'], tasks: ['إنشاء مشروع ASP.NET', 'استكشاف الهيكل', 'تطبيق عملي'], resources: ['📄 توثيق ASP.NET', '🎬 فيديو 121'], duration: 2, source: 'فيديو 121', part: 'الجزء الأول' },
            { day: 122, topic: 'Controllers', description: 'تعلم الـ Controllers', goals: ['فهم Controller', 'معرفة routing', 'استخدام actions'], tasks: ['إنشاء Controller', 'إضافة actions', 'تطبيق عملي'], resources: ['📄 توثيق Controllers', '🎬 فيديو 122'], duration: 2, source: 'فيديو 122', part: 'الجزء الثاني' },
            { day: 123, topic: 'Models و DTOs', description: 'تعلم النماذج', goals: ['فهم Models', 'معرفة DTOs', 'استخدام validation'], tasks: ['إنشاء Models', 'إنشاء DTOs', 'تطبيق validation'], resources: ['📄 توثيق Models', '🎬 فيديو 123'], duration: 2, source: 'فيديو 123', part: 'الجزء الثالث' },
            { day: 124, topic: 'Entity Framework - الجزء الأول', description: 'تعلم EF Core', goals: ['فهم DbContext', 'معرفة DbSet', 'استخدام connection'], tasks: ['إنشاء DbContext', 'إضافة DbSet', 'تطبيق عملي'], resources: ['📄 توثيق EF', '🎬 فيديو 124'], duration: 2, source: 'فيديو 124', part: 'الجزء الرابع' },
            { day: 125, topic: 'Entity Framework - الجزء الثاني', description: 'تعلم Migrations', goals: ['فهم Add-Migration', 'معرفة Update-Database', 'استخدام migrations'], tasks: ['إنشاء migration', 'تطبيق migration', 'تطبيق عملي'], resources: ['📄 توثيق Migrations', '🎬 فيديو 125'], duration: 2, source: 'فيديو 125', part: 'الجزء الخامس' },
            { day: 126, topic: 'Entity Framework - العلاقات', description: 'تعلم العلاقات في EF', goals: ['فهم One-to-Many', 'معرفة Many-to-Many', 'استخدام navigation'], tasks: ['إنشاء علاقات', 'استخدام navigation', 'تطبيق عملي'], resources: ['📄 توثيق Relationships', '🎬 فيديو 126'], duration: 2, source: 'فيديو 126', part: 'الجزء السادس' },
            { day: 127, topic: 'REST API - الجزء الأول', description: 'تعلم REST API', goals: ['فهم GET', 'معرفة POST', 'استخدام PUT, DELETE'], tasks: ['إنشاء API', 'تطبيق GET', 'تطبيق POST'], resources: ['📄 توثيق REST', '🎬 فيديو 127'], duration: 2, source: 'فيديو 127', part: 'الجزء السابع' },
            { day: 128, topic: 'REST API - الجزء الثاني', description: 'تعلم status codes', goals: ['فهم 200', 'معرفة 404', 'استخدام 500'], tasks: ['تطبيق status codes', 'معالجة الأخطاء', 'تطبيق عملي'], resources: ['📄 توثيق Status Codes', '🎬 فيديو 128'], duration: 2, source: 'فيديو 128', part: 'الجزء الثامن' },
            { day: 129, topic: 'Dependency Injection', description: 'تعلم الحقن التابع', goals: ['فهم services', 'معرفة DI container', 'استخدام AddScoped, AddTransient'], tasks: ['إضافة services', 'استخدام DI', 'تطبيق عملي'], resources: ['📄 توثيق DI', '🎬 فيديو 129'], duration: 2, source: 'فيديو 129', part: 'الجزء التاسع' },
            { day: 130, topic: 'Middleware', description: 'تعلم الـ Middleware', goals: ['فهم pipeline', 'معرفة custom middleware', 'استخدام Use'], tasks: ['إنشاء middleware', 'إضافته للـ pipeline', 'تطبيق عملي'], resources: ['📄 توثيق Middleware', '🎬 فيديو 130'], duration: 2, source: 'فيديو 130', part: 'الجزء العاشر' },
            { day: 131, topic: 'Configuration', description: 'تعلم الإعدادات', goals: ['فهم appsettings.json', 'معرفة environment', 'استخدام IConfiguration'], tasks: ['قراءة الإعدادات', 'استخدام environment', 'تطبيق عملي'], resources: ['📄 توثيق Configuration', '🎬 فيديو 131'], duration: 2, source: 'فيديو 131', part: 'الجزء الحادي عشر' },
            { day: 132, topic: 'Logging', description: 'تعلم التسجيل', goals: ['فهم ILogger', 'معرفة Serilog', 'استخدام logging'], tasks: ['إضافة logging', 'استخدام Serilog', 'تطبيق عملي'], resources: ['📄 توثيق Logging', '🎬 فيديو 132'], duration: 2, source: 'فيديو 132', part: 'الجزء الثاني عشر' },
            { day: 133, topic: 'CORS', description: 'تعلم CORS', goals: ['فهم Cross-Origin', 'معرفة policies', 'استخدام AllowAnyOrigin'], tasks: ['تطبيق CORS', 'تطبيق policies', 'تطبيق عملي'], resources: ['📄 توثيق CORS', '🎬 فيديو 133'], duration: 2, source: 'فيديو 133', part: 'الجزء الثالث عشر' },
            { day: 134, topic: 'API Versioning', description: 'تعلم إصدارات API', goals: ['فهم versioning', 'معرفة routes', 'استخدام versions'], tasks: ['تطبيق versioning', 'استخدام routes', 'تطبيق عملي'], resources: ['📄 توثيق Versioning', '🎬 فيديو 134'], duration: 2, source: 'فيديو 134', part: 'الجزء الرابع عشر' },
            { day: 135, topic: 'Global Error Handling', description: 'تعلم معالجة الأخطاء العامة', goals: ['فهم ExceptionMiddleware', 'معرفة global handling', 'استخدام try-catch'], tasks: ['تطبيق ExceptionMiddleware', 'معالجة الأخطاء', 'تطبيق عملي'], resources: ['📄 توثيق Error Handling', '🎬 فيديو 135'], duration: 2, source: 'فيديو 135', part: 'الجزء الخامس عشر' },
            { day: 136, topic: 'Fluent Validation', description: 'تعلم التحقق المتقدم', goals: ['فهم FluentValidation', 'معرفة rules', 'استخدام validators'], tasks: ['إنشاء validators', 'تطبيق rules', 'تطبيق عملي'], resources: ['📄 توثيق Fluent', '🎬 فيديو 136'], duration: 2, source: 'فيديو 136', part: 'الجزء السادس عشر' },
            { day: 137, topic: 'Automapper', description: 'تعلم Automapper', goals: ['فهم mapping', 'معرفة profiles', 'استخدام IMapper'], tasks: ['تطبيق Automapper', 'إنشاء profiles', 'تطبيق عملي'], resources: ['📄 توثيق Automapper', '🎬 فيديو 137'], duration: 2, source: 'فيديو 137', part: 'الجزء السابع عشر' },
            { day: 138, topic: 'EF Core - التحميل', description: 'تعلم تحميل البيانات', goals: ['فهم Eager Loading', 'معرفة Lazy Loading', 'استخدام Explicit Loading'], tasks: ['تطبيق Eager', 'تطبيق Lazy', 'تطبيق عملي'], resources: ['📄 توثيق Loading', '🎬 فيديو 138'], duration: 2, source: 'فيديو 138', part: 'الجزء الثامن عشر' },
            { day: 139, topic: 'EF Core - التغييرات', description: 'تعلم تتبع التغييرات', goals: ['فهم ChangeTracker', 'معرفة SaveChanges', 'استخدام state'], tasks: ['تتبع التغييرات', 'حفظ التغييرات', 'تطبيق عملي'], resources: ['📄 توثيق ChangeTracker', '🎬 فيديو 139'], duration: 2, source: 'فيديو 139', part: 'الجزء التاسع عشر' },
            { day: 140, topic: 'API للمنصة - الجزء الأول', description: 'بناء API للـ Progress', goals: ['تطبيق API', 'معرفة CRUD', 'استخدام EF'], tasks: ['بناء API Progress', 'تطبيق CRUD', 'تطبيق عملي'], resources: ['📄 مشروع API 1', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء العشرون' },
            { day: 141, topic: 'API للمنصة - الجزء الثاني', description: 'بناء API للـ Notes', goals: ['تطبيق API', 'معرفة CRUD', 'استخدام EF'], tasks: ['بناء API Notes', 'تطبيق CRUD', 'تطبيق عملي'], resources: ['📄 مشروع API 2', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الحادي والعشرون' },
            { day: 142, topic: 'API للمنصة - الجزء الثالث', description: 'بناء API للـ Projects', goals: ['تطبيق API', 'معرفة CRUD', 'استخدام EF'], tasks: ['بناء API Projects', 'تطبيق CRUD', 'تطبيق عملي'], resources: ['📄 مشروع API 3', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الثاني والعشرون' },
            { day: 143, topic: 'ربط Frontend مع Backend', description: 'ربط المنصة بـ API', goals: ['تطبيق fetch', 'معرفة async', 'استخدام API'], tasks: ['ربط المنصة بـ API', 'تطبيق fetch', 'تطبيق عملي'], resources: ['📄 ربط', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الثالث والعشرون' },
            { day: 144, topic: 'اختبار API', description: 'تعلم اختبار API', goals: ['فهم Postman', 'معرفة Swagger', 'استخدام testing'], tasks: ['اختبار API بـ Postman', 'استخدام Swagger', 'تطبيق عملي'], resources: ['📄 توثيق Testing', '🎬 فيديو 144'], duration: 2, source: 'فيديو 144', part: 'الجزء الرابع والعشرون' },
            { day: 145, topic: 'Unit Testing', description: 'تعلم اختبار الوحدات', goals: ['فهم xUnit', 'معرفة NUnit', 'استخدام assertions'], tasks: ['كتابة Unit Tests', 'استخدام xUnit', 'تطبيق عملي'], resources: ['📄 توثيق Unit Testing', '🎬 فيديو 145'], duration: 2, source: 'فيديو 145', part: 'الجزء الخامس والعشرون' },
            { day: 146, topic: 'Integration Testing', description: 'تعلم اختبار التكامل', goals: ['فهم TestServer', 'معرفة WebApplicationFactory', 'استخدام integration'], tasks: ['كتابة Integration Tests', 'استخدام TestServer', 'تطبيق عملي'], resources: ['📄 توثيق Integration', '🎬 فيديو 146'], duration: 2, source: 'فيديو 146', part: 'الجزء السادس والعشرون' },
            { day: 147, topic: 'مراجعة ASP.NET', description: 'مراجعة مفاهيم ASP.NET', goals: ['تثبيت المفاهيم', 'مراجعة API', 'تطبيق عملي'], tasks: ['مراجعة ASP.NET', 'حل مشاكل', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 فيديو 147'], duration: 2, source: 'مراجعة', part: 'الجزء السابع والعشرون' },
            { day: 148, topic: 'مراجعة EF Core', description: 'مراجعة مفاهيم EF', goals: ['تثبيت المفاهيم', 'مراجعة migrations', 'تطبيق عملي'], tasks: ['مراجعة EF', 'حل مشاكل', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 فيديو 148'], duration: 2, source: 'مراجعة', part: 'الجزء الثامن والعشرون' },
            { day: 149, topic: 'تحسين API', description: 'تعلم تحسين الأداء', goals: ['فهم caching', 'معرفة performance', 'استخدام optimization'], tasks: ['تحسين API', 'تطبيق caching', 'تطبيق عملي'], resources: ['📄 توثيق Optimization', '🎬 فيديو 149'], duration: 2, source: 'فيديو 149', part: 'الجزء التاسع والعشرون' },
            { day: 150, topic: 'تطوير المنصة كاملة', description: 'دمج كل شيء معاً', goals: ['دمج Frontend و Backend', 'تطبيق Full Stack', 'تطبيق عملي'], tasks: ['دمج المنصة', 'تطبيق كل الميزات', 'تطبيق عملي'], resources: ['📄 مشروع كامل', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الثلاثون' }
        ]
    },
    month6: {
        name: '🔐 الشهر السادس: Authentication + Deployment',
        days: [
            { day: 151, topic: 'مقدمة Authentication', description: 'تعلم المصادقة', goals: ['فهم Identity', 'معرفة JWT', 'استخدام Authentication'], tasks: ['فهم المصادقة', 'تطبيق concepts', 'تطبيق عملي'], resources: ['📄 توثيق Auth', '🎬 فيديو 151'], duration: 2, source: 'فيديو 151', part: 'الجزء الأول' },
            { day: 152, topic: 'ASP.NET Core Identity', description: 'تعلم Identity', goals: ['فهم UserManager', 'معرفة SignInManager', 'استخدام Identity'], tasks: ['تطبيق Identity', 'استخدام UserManager', 'تطبيق عملي'], resources: ['📄 توثيق Identity', '🎬 فيديو 152'], duration: 2, source: 'فيديو 152', part: 'الجزء الثاني' },
            { day: 153, topic: 'JWT - الجزء الأول', description: 'تعلم JWT', goals: ['فهم generate token', 'معرفة claims', 'استخدام JWT'], tasks: ['توليد JWT', 'إضافة claims', 'تطبيق عملي'], resources: ['📄 توثيق JWT', '🎬 فيديو 153'], duration: 2, source: 'فيديو 153', part: 'الجزء الثالث' },
            { day: 154, topic: 'JWT - الجزء الثاني', description: 'تعلم validate token', goals: ['فهم validate', 'معرفة middleware', 'استخدام JWT'], tasks: ['التحقق من JWT', 'تطبيق middleware', 'تطبيق عملي'], resources: ['📄 توثيق JWT 2', '🎬 فيديو 154'], duration: 2, source: 'فيديو 154', part: 'الجزء الرابع' },
            { day: 155, topic: 'Authorization', description: 'تعلم التفويض', goals: ['فهم Roles', 'معرفة Policies', 'استخدام Claims'], tasks: ['تطبيق Roles', 'تطبيق Policies', 'تطبيق عملي'], resources: ['📄 توثيق Authorization', '🎬 فيديو 155'], duration: 2, source: 'فيديو 155', part: 'الجزء الخامس' },
            { day: 156, topic: 'Register و Login', description: 'تسجيل المستخدمين', goals: ['تطبيق Register', 'تطبيق Login', 'استخدام Identity'], tasks: ['بناء Register', 'بناء Login', 'تطبيق عملي'], resources: ['📄 مشروع Auth', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء السادس' },
            { day: 157, topic: 'User Profile', description: 'الملف الشخصي', goals: ['تطبيق Profile', 'معرفة Update', 'استخدام UserManager'], tasks: ['بناء Profile', 'تحديث Profile', 'تطبيق عملي'], resources: ['📄 مشروع Profile', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء السابع' },
            { day: 158, topic: 'Password Reset', description: 'نسيان كلمة المرور', goals: ['فهم reset', 'معرفة token', 'استخدام email'], tasks: ['تطبيق Reset Password', 'تطبيق email', 'تطبيق عملي'], resources: ['📄 مشروع Reset', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الثامن' },
            { day: 159, topic: 'Email Confirmation', description: 'تأكيد البريد', goals: ['فهم confirmation', 'معرفة token', 'استخدام email'], tasks: ['تطبيق Email Confirmation', 'تطبيق email', 'تطبيق عملي'], resources: ['📄 مشروع Email', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء التاسع' },
            { day: 160, topic: 'Two-Factor Authentication', description: 'تعلم 2FA', goals: ['فهم 2FA', 'معرفة TOTP', 'استخدام authenticator'], tasks: ['تطبيق 2FA', 'تطبيق TOTP', 'تطبيق عملي'], resources: ['📄 توثيق 2FA', '🎬 فيديو 160'], duration: 2, source: 'فيديو 160', part: 'الجزء العاشر' },
            { day: 161, topic: 'تطبيق Auth في المنصة', description: 'حماية الـ API', goals: ['تطبيق Authorization', 'معرفة Protect', 'استخدام JWT'], tasks: ['حماية API', 'تطبيق JWT', 'تطبيق عملي'], resources: ['📄 مشروع Auth API', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الحادي عشر' },
            { day: 162, topic: 'Frontend Auth', description: 'مصادقة الواجهة', goals: ['تطبيق login form', 'معرفة JWT storage', 'استخدام fetch'], tasks: ['بناء Login Form', 'تخزين JWT', 'تطبيق عملي'], resources: ['📄 مشروع Frontend Auth', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الثاني عشر' },
            { day: 163, topic: 'Protected Routes', description: 'تقييد الوصول', goals: ['تطبيق protected routes', 'معرفة guards', 'استخدام navigation'], tasks: ['تقييد الصفحات', 'تطبيق guards', 'تطبيق عملي'], resources: ['📄 مشروع Protected', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء الثالث عشر' },
            { day: 164, topic: 'مشروع متكامل - الجزء الأول', description: 'تطوير المنصة كاملة', goals: ['تطبيق Full Stack', 'معرفة Auth', 'استخدام API'], tasks: ['تطوير المنصة', 'تطبيق كل الميزات', 'تطبيق عملي'], resources: ['📄 مشروع كامل 1', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الرابع عشر' },
            { day: 165, topic: 'مشروع متكامل - الجزء الثاني', description: 'إضافة ميزات جديدة', goals: ['تطبيق ميزات', 'معرفة تحسينات', 'استخدام UI'], tasks: ['إضافة ميزات', 'تحسين UI', 'تطبيق عملي'], resources: ['📄 مشروع كامل 2', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء الخامس عشر' },
            { day: 166, topic: 'مشروع متكامل - الجزء الثالث', description: 'تحسين وتجربة المستخدم', goals: ['تطبيق تحسينات', 'معرفة UX', 'استخدام feedback'], tasks: ['تحسين التجربة', 'تطبيق feedback', 'تطبيق عملي'], resources: ['📄 مشروع كامل 3', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء السادس عشر' },
            { day: 167, topic: 'Deployment - GitHub', description: 'رفع المشروع لـ GitHub', goals: ['فهم push', 'معرفة commit', 'استخدام GitHub'], tasks: ['رفع المشروع لـ GitHub', 'تطبيق git', 'تطبيق عملي'], resources: ['📄 توثيق GitHub', '🎬 فيديو 167'], duration: 2, source: 'فيديو 167', part: 'الجزء السابع عشر' },
            { day: 168, topic: 'Deployment - Backend', description: 'نشر ASP.NET Core', goals: ['فهم Azure', 'معرفة VPS', 'استخدام deployment'], tasks: ['نشر Backend', 'تطبيق deployment', 'تطبيق عملي'], resources: ['📄 توثيق Deploy', '🎬 فيديو 168'], duration: 2, source: 'فيديو 168', part: 'الجزء الثامن عشر' },
            { day: 169, topic: 'Deployment - Frontend', description: 'نشر الواجهة', goals: ['فهم Netlify', 'معرفة Vercel', 'استخدام hosting'], tasks: ['نشر Frontend', 'تطبيق hosting', 'تطبيق عملي'], resources: ['📄 توثيق Hosting', '🎬 فيديو 169'], duration: 2, source: 'فيديو 169', part: 'الجزء التاسع عشر' },
            { day: 170, topic: 'Deployment - Database', description: 'نشر SQL Server', goals: ['فهم cloud DB', 'معرفة connection', 'استخدام migration'], tasks: ['نشر قاعدة البيانات', 'تطبيق connection', 'تطبيق عملي'], resources: ['📄 توثيق DB', '🎬 فيديو 170'], duration: 2, source: 'فيديو 170', part: 'الجزء العشرون' },
            { day: 171, topic: 'CI/CD Pipeline', description: 'تعلم GitHub Actions', goals: ['فهم CI/CD', 'معرفة actions', 'استخدام pipeline'], tasks: ['تطبيق CI/CD', 'استخدام GitHub Actions', 'تطبيق عملي'], resources: ['📄 توثيق CI/CD', '🎬 فيديو 171'], duration: 2, source: 'فيديو 171', part: 'الجزء الحادي والعشرون' },
            { day: 172, topic: 'Domain و SSL', description: 'ربط المجال و HTTPS', goals: ['فهم domain', 'معرفة SSL', 'استخدام HTTPS'], tasks: ['ربط domain', 'تطبيق SSL', 'تطبيق عملي'], resources: ['📄 توثيق Domain', '🎬 فيديو 172'], duration: 2, source: 'فيديو 172', part: 'الجزء الثاني والعشرون' },
            { day: 173, topic: 'Monitoring', description: 'تعلم المراقبة', goals: ['فهم Application Insights', 'معرفة logging', 'استخدام monitoring'], tasks: ['تطبيق monitoring', 'استخدام logging', 'تطبيق عملي'], resources: ['📄 توثيق Monitoring', '🎬 فيديو 173'], duration: 2, source: 'فيديو 173', part: 'الجزء الثالث والعشرون' },
            { day: 174, topic: 'Performance Optimization', description: 'تحسين السرعة', goals: ['فهم optimization', 'معرفة caching', 'استخدام CDN'], tasks: ['تحسين الأداء', 'تطبيق caching', 'تطبيق عملي'], resources: ['📄 توثيق Performance', '🎬 فيديو 174'], duration: 2, source: 'فيديو 174', part: 'الجزء الرابع والعشرون' },
            { day: 175, topic: 'Security Best Practices', description: 'أمان التطبيق', goals: ['فهم security', 'معرفة best practices', 'استخدام OWASP'], tasks: ['تطبيق الأمان', 'تطبيق best practices', 'تطبيق عملي'], resources: ['📄 توثيق Security', '🎬 فيديو 175'], duration: 2, source: 'فيديو 175', part: 'الجزء الخامس والعشرون' },
            { day: 176, topic: 'إضافة المشروع للمعرض', description: 'Portfolio', goals: ['بناء Portfolio', 'معرفة showcase', 'استخدام presentation'], tasks: ['إضافة المشروع لـ Portfolio', 'تطبيق showcase', 'تطبيق عملي'], resources: ['📄 مشروع Portfolio', '🎬 تطبيق'], duration: 2, source: 'تطبيق', part: 'الجزء السادس والعشرون' },
            { day: 177, topic: 'مراجعة نهائية', description: 'مراجعة كل المسار', goals: ['تثبيت المفاهيم', 'مراجعة كل شيء', 'تطبيق عملي'], tasks: ['مراجعة المسار كاملاً', 'حل مشاكل', 'تطبيق عملي'], resources: ['📄 مراجعة', '🎬 فيديو 177'], duration: 2, source: 'مراجعة', part: 'الجزء السابع والعشرون' },
            { day: 178, topic: 'تحضير للمقابلات', description: 'أسئلة المقابلات', goals: ['فهم الأسئلة', 'معرفة الإجابات', 'استخدام practice'], tasks: ['مراجعة أسئلة المقابلات', 'تطبيق practice', 'تطبيق عملي'], resources: ['📄 مقابلات', '🎬 فيديو 178'], duration: 2, source: 'مراجعة', part: 'الجزء الثامن والعشرون' },
            { day: 179, topic: 'مشروع إضافي', description: 'مشروع تحدي', goals: ['تطبيق كل المهارات', 'معرفة challenge', 'استخدام creative'], tasks: ['بناء مشروع تحدي', 'تطبيق كل المهارات', 'تطبيق عملي'], resources: ['📄 مشروع تحدي', '🎬 تطبيق'], duration: 2, source: 'مشروع', part: 'الجزء التاسع والعشرون' },
            { day: 180, topic: '🎉 التخرج!', description: 'مبروك أنت Full Stack Developer', goals: ['فهم الإنجاز', 'معرفة المستقبل', 'استخدام الاستمرارية'], tasks: ['احتفال بالإنجاز', 'تخطيط للمستقبل', 'تطبيق الاستمرارية'], resources: ['🎊 مبروك!', '🎬 تخرج'], duration: 2, source: '🎊', part: 'الجزء الثلاثون' }
        ]
    }
};

// دمج كل الأيام
const allDays = [];
Object.values(roadmapData).forEach(month => {
    month.days.forEach(day => {
        allDays.push(day);
    });
});

// =============================================
// إدارة البيانات
// =============================================
function loadData() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const data = JSON.parse(raw);
            return {...defaultData, ...data };
        }
    } catch (e) {
        console.warn('خطأ في تحميل البيانات:', e);
    }
    return JSON.parse(JSON.stringify(defaultData));
}

function saveData(data) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
        console.warn('خطأ في حفظ البيانات:', e);
    }
}

let appData = loadData();
let currentPage = 'dashboard';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// =============================================
// دوال مساعدة
// =============================================
function getToday() {
    return new Date().toISOString().split('T')[0];
}

// 🔥 الدالة المعدلة: اليوم = عدد الأيام المكتملة + 1
function getCurrentDayNumber() {
    const completed = getCompletedDays().length;
    const nextDay = completed + 1;
    return Math.min(nextDay, DAYS_TOTAL);
}

function getTodayLesson() {
    const dayNum = getCurrentDayNumber();
    if (dayNum > DAYS_TOTAL) return null;
    return allDays.find(d => d.day === dayNum) || null;
}

function getProgressPercentage() {
    const completed = getCompletedDays().length;
    return Math.round((completed / DAYS_TOTAL) * 100);
}

function getCompletedDays() {
    return appData.completedDays || [];
}

function isDayCompleted(day) {
    return getCompletedDays().includes(day);
}

function getSkillLevel(skillName) {
    const skill = appData.skills.find(s => s.name === skillName);
    return skill ? skill.level : 0;
}

function updateSkillLevel(skillName, increment) {
    const skill = appData.skills.find(s => s.name === skillName);
    if (skill) {
        skill.level = Math.min(100, skill.level + increment);
        saveData(appData);
    }
}

function addAchievement(title) {
    if (!appData.achievements.find(a => a.title === title)) {
        appData.achievements.push({ title, date: new Date().toISOString() });
        saveData(appData);
        addNotification(`🏆 إنجاز جديد: ${title}`);
        return true;
    }
    return false;
}

function addNotification(title) {
    appData.notifications.unshift({ title, time: new Date().toISOString() });
    if (appData.notifications.length > 50) appData.notifications.pop();
    saveData(appData);
    renderNotifications();
}

function getStreak() {
    if (!appData.lastStudyDate) return 0;
    const last = new Date(appData.lastStudyDate);
    const today = new Date();
    const diff = Math.floor((today - last) / (1000 * 60 * 60 * 24));
    if (diff === 0) return appData.streak || 0;
    if (diff === 1) return (appData.streak || 0) + 1;
    return 0;
}

function getDayRating(day) {
    return appData.ratings ? appData.ratings[day] || null : null;
}

// =============================================
// دوال العرض
// =============================================
function renderDashboard() {
    const dayNum = getCurrentDayNumber();
    const todayLesson = getTodayLesson();
    const progress = getProgressPercentage();
    const completed = getCompletedDays().length;
    const remaining = DAYS_TOTAL - completed;
    const streak = getStreak();
    const totalHours = appData.progressEntries.reduce((sum, p) => sum + (p.hours || 0), 0);

    document.getElementById('dashDay').textContent = dayNum;
    document.getElementById('dashUserName').textContent = appData.user.name || 'إبراهيم';
    document.getElementById('wsDays').textContent = completed;
    document.getElementById('wsHours').textContent = Math.round(totalHours);
    document.getElementById('wsStreak').textContent = streak;
    document.getElementById('sidebarUserName').textContent = appData.user.name || 'إبراهيم';
    document.getElementById('sidebarStreak').textContent = streak;

    document.getElementById('mainProgress').textContent = `${progress}%`;
    document.getElementById('mainProgressFill').style.width = `${progress}%`;
    document.getElementById('progressFillText').textContent = `${progress}%`;
    document.getElementById('completedDaysCount').textContent = completed;
    document.getElementById('remainingDaysCount').textContent = remaining;
    document.getElementById('dailyPercent').textContent = dayNum > 0 ? `${Math.round((completed / dayNum) * 100)}%` : '0%';

    document.getElementById('navDayBadge').textContent = dayNum;
    document.getElementById('navRoadmapProgress').textContent = `${progress}%`;

    // تحية
    const hour = new Date().getHours();
    let emoji = '👋';
    if (hour < 12) emoji = '🌅';
    else if (hour < 17) emoji = '☀️';
    else if (hour < 21) emoji = '🌇';
    else emoji = '🌙';
    document.getElementById('greetingEmoji').textContent = emoji;

    // المعالم
    document.querySelectorAll('.milestone').forEach(el => {
        const val = parseInt(el.dataset.value);
        if (completed >= val) el.classList.add('active');
        else el.classList.remove('active');
    });

    // تعلم اليوم
    const content = document.getElementById('todayContent');
    if (todayLesson) {
        const completedStatus = isDayCompleted(todayLesson.day);
        const rating = getDayRating(todayLesson.day);

        let tasksHtml = '';
        if (todayLesson.tasks) {
            tasksHtml = '<ul class="today-tasks">';
            todayLesson.tasks.forEach(t => {
                tasksHtml += `<li>${t}</li>`;
            });
            tasksHtml += '</ul>';
        }

        let resourcesHtml = '';
        if (todayLesson.resources) {
            resourcesHtml = '<div class="today-resources">';
            todayLesson.resources.forEach(r => {
                resourcesHtml += `<a href="#">${r}</a>`;
            });
            resourcesHtml += '</div>';
        }

        let goalsHtml = '';
        if (todayLesson.goals) {
            goalsHtml = todayLesson.goals.join(' • ');
        }

        content.innerHTML = `
            <div class="today-topic">${todayLesson.topic}</div>
            <div class="today-desc">${todayLesson.description}</div>
            <div class="today-meta">
                <span>⏱️ المدة: <strong>${todayLesson.duration}</strong> ساعة</span>
                <span>📌 المصدر: <strong>${todayLesson.source}</strong></span>
                <span>📋 الجزء: <strong>${todayLesson.part || 'الرئيسي'}</strong></span>
                <span>📅 اليوم: <strong>${todayLesson.day}</strong></span>
            </div>
            <div class="today-details">
                <div class="detail-row">
                    <span class="detail-label">🎯 الأهداف:</span>
                    <span>${goalsHtml}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">📝 المهام:</span>
                    <span>${tasksHtml}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">🔗 المصادر:</span>
                    <span>${resourcesHtml}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">✅ الحالة:</span>
                    <span class="today-status ${completedStatus ? 'done' : 'pending'}">
                        ${completedStatus ? '✅ أتممت' : '⏳ لم تبدأ'}
                    </span>
                </div>
                ${rating ? `<div class="detail-row"><span class="detail-label">⭐ التقييم:</span><span>${rating}/5</span></div>` : ''}
            </div>
        `;
    } else {
        content.innerHTML = `
            <div class="today-topic">🎉 مبروك! أتممت المسار كاملاً!</div>
            <div class="today-desc">أنت الآن Full Stack Developer معتمد</div>
            <div class="today-status done">✅ مكتمل</div>
        `;
    }

    // آخر النشاطات
    const recent = document.getElementById('recentActivities');
    const entries = appData.progressEntries.slice(-5).reverse();
    if (entries.length === 0) {
        recent.innerHTML = '<p class="empty-state">لا توجد نشاطات</p>';
    } else {
        recent.innerHTML = entries.map(e => `
            <div class="activity-item">
                <span class="activity-icon">📚</span>
                <span class="activity-text">${e.topic}</span>
                <span class="activity-time">${e.hours}h</span>
            </div>
        `).join('');
    }

    // المهارات السريعة
    const mini = document.getElementById('miniSkills');
    const topSkills = appData.skills.filter(s => s.level > 0).slice(0, 5);
    if (topSkills.length === 0) {
        mini.innerHTML = '<p class="empty-state">لا توجد مهارات</p>';
    } else {
        mini.innerHTML = topSkills.map(s => `
            <div class="mini-skill">
                <span class="ms-name">${s.icon} ${s.name}</span>
                <span class="ms-level">${s.level}%</span>
            </div>
        `).join('');
    }

    document.getElementById('navNotesBadge').textContent = appData.notes.length;
    document.getElementById('navAchievementsBadge').textContent = appData.achievements.length;
    document.getElementById('notesCount').textContent = appData.notes.length;
    document.getElementById('achievementsCount').textContent = appData.achievements.length;

    const now = new Date();
    document.getElementById('headerDate').textContent = now.toLocaleDateString('ar-EG', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
}

function renderRoadmap() {
    const container = document.getElementById('roadmapContainer');
    let html = '';
    Object.values(roadmapData).forEach(month => {
        html += `<div class="roadmap-month"><h3>${month.name}</h3>`;
        month.days.forEach(day => {
            const completed = isDayCompleted(day.day);
            html += `
                <div class="roadmap-day">
                    <span class="day-num">اليوم ${day.day}</span>
                    <span class="day-topic">${day.topic}</span>
                    <span class="day-status">${completed ? '✅' : '⏳'}</span>
                </div>
            `;
        });
        html += '</div>';
    });
    container.innerHTML = html;
}

function renderProgress() {
    const log = document.getElementById('progressLog');
    const entries = appData.progressEntries || [];
    if (entries.length === 0) {
        log.innerHTML = '<p class="empty-state">لا يوجد تقدم</p>';
        return;
    }
    log.innerHTML = [...entries].reverse().map(e => `
        <div class="progress-entry">
            <span class="pe-date">${new Date(e.date).toLocaleDateString('ar-EG')}</span>
            <span class="pe-topic">${e.topic}</span>
            <span class="pe-hours">${e.hours} ساعة</span>
        </div>
    `).join('');
}

function renderNotes() {
    const list = document.getElementById('notesList');
    const notes = appData.notes || [];
    document.getElementById('notesCount').textContent = notes.length;
    document.getElementById('navNotesBadge').textContent = notes.length;
    if (notes.length === 0) {
        list.innerHTML = '<p class="empty-state">لا توجد ملاحظات</p>';
        return;
    }
    list.innerHTML = [...notes].reverse().map((n, i) => `
        <div class="note-item">
            <div>
                <div class="note-text">${n.text}</div>
                ${n.tag ? `<span class="note-tag">#${n.tag}</span>` : ''}
                <div class="note-date">${new Date(n.date).toLocaleDateString('ar-EG')}</div>
            </div>
            <button class="note-delete" data-index="${i}">🗑️</button>
        </div>
    `).join('');
    document.querySelectorAll('.note-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.index);
            appData.notes.splice(idx, 1);
            saveData(appData);
            renderNotes();
            renderDashboard();
        });
    });
}

function renderProjects() {
    const list = document.getElementById('projectsList');
    const projects = appData.projects || [];
    if (projects.length === 0) {
        list.innerHTML = '<p class="empty-state">لا توجد مشاريع</p>';
        return;
    }
    list.innerHTML = projects.map((p, i) => `
        <div class="project-item">
            <span class="project-name">${p.name}</span>
            <span class="project-status ${p.status}">${
                p.status === 'completed' ? '✅ مكتمل' :
                p.status === 'pending' ? '⏳ قيد التنفيذ' : '📋 مخطط'
            }</span>
            <button class="project-delete" data-index="${i}">🗑️</button>
        </div>
    `).join('');
    document.querySelectorAll('.project-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const idx = parseInt(this.dataset.index);
            appData.projects.splice(idx, 1);
            saveData(appData);
            renderProjects();
            renderDashboard();
        });
    });
}

function renderSkills() {
    const container = document.getElementById('skillsContainer');
    const avg = appData.skills.reduce((s, skill) => s + skill.level, 0) / appData.skills.length;
    document.getElementById('skillsAvg').textContent = `${Math.round(avg)}%`;
    container.innerHTML = appData.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <span class="skill-name">${skill.icon} ${skill.name}</span>
                <span class="skill-percent">${skill.level}%</span>
            </div>
            <div class="skill-bar">
                <div class="skill-bar-fill" style="width: ${skill.level}%;"></div>
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    const container = document.getElementById('achievementsContainer');
    const achievements = appData.achievements || [];
    document.getElementById('achievementsCount').textContent = achievements.length;
    document.getElementById('navAchievementsBadge').textContent = achievements.length;
    if (achievements.length === 0) {
        container.innerHTML = '<p class="empty-state">لا توجد إنجازات</p>';
        return;
    }
    container.innerHTML = achievements.map(a => `
        <div class="achievement-card">
            <span class="achievement-icon">🏆</span>
            <div class="achievement-title">${a.title}</div>
            <div class="achievement-date">${new Date(a.date).toLocaleDateString('ar-EG')}</div>
        </div>
    `).join('');
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const monthYear = document.getElementById('calMonthYear');
    const monthNames = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    monthYear.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const weekDays = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];
    let html = weekDays.map(d => `<div class="cal-day-header">${d}</div>`).join('');
    for (let i = 0; i < firstDay; i++) {
        html += `<div class="cal-day empty"></div>`;
    }
    const today = new Date();
    const todayStr = getToday();
    const completedDays = getCompletedDays();
    for (let d = 1; d <= daysInMonth; d++) {
        const dateObj = new Date(currentYear, currentMonth, d);
        const dateStr = dateObj.toISOString().split('T')[0];
        const isToday = dateStr === todayStr;
        const isStudied = completedDays.includes(d) || appData.progressEntries.some(p => p.date === dateStr);
        const isFuture = dateObj > today;
        let classes = 'cal-day';
        if (isToday) classes += ' today';
        if (isStudied && !isFuture) classes += ' studied';
        else if (!isFuture && !isStudied && dateObj < today) classes += ' missed';
        html += `<div class="${classes}">${d}</div>`;
    }
    grid.innerHTML = html;
}

function renderStatistics() {
    const entries = appData.progressEntries || [];
    const totalHours = entries.reduce((s, e) => s + (e.hours || 0), 0);
    const totalDays = entries.length;
    const avgHours = totalDays > 0 ? totalHours / totalDays : 0;
    const maxHours = entries.length > 0 ? Math.max(...entries.map(e => e.hours)) : 0;
    document.getElementById('quickStats').innerHTML = `
        <div class="qs-item"><span class="qs-label">أيام الدراسة</span><span class="qs-value">${totalDays}</span></div>
        <div class="qs-item"><span class="qs-label">إجمالي الساعات</span><span class="qs-value">${totalHours.toFixed(1)}</span></div>
        <div class="qs-item"><span class="qs-label">متوسط الساعات</span><span class="qs-value">${avgHours.toFixed(1)}</span></div>
        <div class="qs-item"><span class="qs-label">أفضل يوم</span><span class="qs-value">${maxHours.toFixed(1)} ساعة</span></div>
    `;
    const hoursChart = document.getElementById('hoursChart');
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const str = d.toISOString().split('T')[0];
        const hours = entries.filter(e => e.date === str).reduce((s, e) => s + (e.hours || 0), 0);
        last7Days.push({ label: d.getDate(), hours });
    }
    const maxH = Math.max(...last7Days.map(d => d.hours), 1);
    hoursChart.innerHTML = last7Days.map(d => `
        <div class="bar-item">
            <div class="bar" style="height: ${(d.hours / maxH) * 100}px; background: ${d.hours > 0 ? '#00d4ff' : '#333355'};"></div>
            <span class="bar-label">${d.label}</span>
        </div>
    `).join('');
    const donut = document.getElementById('skillsDonut');
    const topSkills = appData.skills.filter(s => s.level > 0).slice(0, 6);
    const colors = ['#00d4ff', '#ff00ff', '#ff6b35', '#00ff88', '#ff0044', '#ffaa00'];
    if (topSkills.length === 0) {
        donut.innerHTML = '<p class="empty-state">لا توجد مهارات</p>';
    } else {
        donut.innerHTML = topSkills.map((s, i) => `
            <div class="donut-item">
                <div class="donut-color" style="background: ${colors[i % colors.length]};"></div>
                <span>${s.icon} ${s.name} (${s.level}%)</span>
            </div>
        `).join('');
    }
}

function renderNotifications() {
    const list = document.getElementById('notifList');
    const notifications = appData.notifications || [];
    const badge = document.getElementById('notifBadge');
    badge.textContent = notifications.length;
    if (notifications.length === 0) {
        list.innerHTML = '<p class="empty-state">لا توجد إشعارات</p>';
        return;
    }
    list.innerHTML = notifications.slice(0, 15).map(n => `
        <div class="notif-item">
            <div class="notif-title">${n.title}</div>
            <div class="notif-time">${new Date(n.time).toLocaleDateString('ar-EG')}</div>
        </div>
    `).join('');
}

// =============================================
// الأحداث والتنقل
// =============================================
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const page = this.dataset.page;
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(`page-${page}`);
        if (target) {
            target.classList.add('active');
            currentPage = page;
            renderPage(page);
        }
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
});

function renderPage(page) {
    switch(page) {
        case 'dashboard': renderDashboard(); break;
        case 'roadmap': renderRoadmap(); break;
        case 'progress': renderProgress(); break;
        case 'notes': renderNotes(); break;
        case 'projects': renderProjects(); break;
        case 'skills': renderSkills(); break;
        case 'achievements': renderAchievements(); break;
        case 'calendar': renderCalendar(); break;
        case 'statistics': renderStatistics(); break;
    }
}

document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
});
document.getElementById('closeSidebar').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('open');
});

document.getElementById('themeToggle').addEventListener('click', function() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'light';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    this.textContent = isDark ? '🌙' : '☀️';
    appData.theme = isDark ? 'dark' : 'light';
    saveData(appData);
});

document.getElementById('notificationBtn').addEventListener('click', () => {
    document.getElementById('notifPanel').classList.toggle('open');
});
document.getElementById('closeNotif').addEventListener('click', () => {
    document.getElementById('notifPanel').classList.remove('open');
});

document.getElementById('fullscreenBtn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {});
    } else {
        document.exitFullscreen().catch(err => {});
    }
});

// =============================================
// زر "أنهيت اليوم" - المعدل
// =============================================
document.getElementById('completeDayBtn').addEventListener('click', function() {
    const dayNum = getCurrentDayNumber();
    const todayLesson = getTodayLesson();
    
    if (!todayLesson) {
        alert('🎉 مبروك! لقد أتممت المسار كاملاً!');
        return;
    }

    if (isDayCompleted(dayNum)) {
        alert('✅ لقد أنهيت هذا اليوم مسبقاً!');
        return;
    }

    appData.completedDays.push(dayNum);
    
    const todayStr = getToday();
    if (appData.lastStudyDate === todayStr) {
        // nothing
    } else if (appData.lastStudyDate) {
        const last = new Date(appData.lastStudyDate);
        const today = new Date();
        const diff = Math.floor((today - last) / (1000 * 60 * 60 * 24));
        if (diff === 1) {
            appData.streak = (appData.streak || 0) + 1;
        } else if (diff > 1) {
            appData.streak = 1;
        } else {
            appData.streak = 1;
        }
    } else {
        appData.streak = 1;
    }
    appData.lastStudyDate = todayStr;

    const topic = todayLesson.topic;
    const skillMap = {
        'HTML': ['HTML'], 'CSS': ['CSS'], 'JavaScript': ['JavaScript'],
        'Git': ['Git'], 'Bootstrap': ['Bootstrap'], 'C#': ['C#'],
        'SQL': ['SQL'], 'ASP.NET': ['ASP.NET Core'], 'Entity Framework': ['Entity Framework'],
        'REST API': ['REST API'], 'JWT': ['JWT'], 'Deployment': ['Deployment']
    };
    for (const [key, skills] of Object.entries(skillMap)) {
        if (topic.includes(key) || topic.includes(key.split(' ')[0])) {
            skills.forEach(s => updateSkillLevel(s, 5));
        }
    }

    if (dayNum === 30) addAchievement('🏆 أتممت HTML + CSS');
    if (dayNum === 60) addAchievement('🏆 أتممت JavaScript');
    if (dayNum === 90) addAchievement('🏆 أتممت Git + Bootstrap + مشاريع');
    if (dayNum === 120) addAchievement('🏆 أتممت C# + OOP + SQL');
    if (dayNum === 150) addAchievement('🏆 أتممت ASP.NET Core + EF');
    if (dayNum === 180) addAchievement('🎊 مبروك! Full Stack Developer!');
    if (appData.streak === 7) addAchievement('🔥 أسبوع كامل من التعلم!');
    if (appData.streak === 30) addAchievement('🔥 30 يوم متتالية!');

    addNotification(`✅ أتممت اليوم ${dayNum}: ${todayLesson.topic}`);
    saveData(appData);
    renderAll();
    
    const nextDay = dayNum + 1;
    if (nextDay <= DAYS_TOTAL) {
        const nextLesson = allDays.find(d => d.day === nextDay);
        alert(`🎉 مبروك! تم تسجيل اليوم ${dayNum}!\n📚 الغد سيكون اليوم ${nextDay}: ${nextLesson?.topic || 'استمر في التعلم!'}`);
    } else {
        alert(`🎉 مبروك! لقد أتممت المسار كاملاً!`);
    }
});

// =============================================
// إضافة تقدم
// =============================================
document.getElementById('addProgressBtn').addEventListener('click', () => {
    document.getElementById('progressModal').classList.add('open');
});
document.getElementById('closeProgressModal').addEventListener('click', () => {
    document.getElementById('progressModal').classList.remove('open');
});

document.getElementById('progressForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const topic = document.getElementById('pTopic').value.trim();
    const hours = parseFloat(document.getElementById('pHours').value);
    const notes = document.getElementById('pNotes').value.trim();
    if (!topic || !hours) {
        alert('الرجاء إدخال جميع البيانات');
        return;
    }
    appData.progressEntries.push({
        date: getToday(),
        topic: topic,
        hours: hours,
        notes: notes
    });
    const skillMap = {
        'HTML': ['HTML'], 'CSS': ['CSS'], 'JavaScript': ['JavaScript'],
        'Git': ['Git'], 'Bootstrap': ['Bootstrap'], 'C#': ['C#'],
        'SQL': ['SQL'], 'ASP.NET': ['ASP.NET Core'], 'Entity Framework': ['Entity Framework'],
        'REST API': ['REST API'], 'JWT': ['JWT'], 'Deployment': ['Deployment']
    };
    for (const [key, skills] of Object.entries(skillMap)) {
        if (topic.includes(key) || topic.includes(key.split(' ')[0])) {
            skills.forEach(s => updateSkillLevel(s, 3));
        }
    }
    saveData(appData);
    this.reset();
    document.getElementById('progressModal').classList.remove('open');
    renderAll();
    addNotification(`📚 سجلت تقدم: ${topic} (${hours} ساعة)`);
    alert('✅ تم تسجيل التقدم بنجاح!');
});

// =============================================
// إضافة ملاحظة
// =============================================
document.getElementById('addNoteBtn').addEventListener('click', function() {
    const text = document.getElementById('noteInput').value.trim();
    const tag = document.getElementById('noteTag').value.trim();
    if (!text) {
        alert('الرجاء كتابة الملاحظة');
        return;
    }
    appData.notes.push({ text, tag: tag || null, date: new Date().toISOString() });
    saveData(appData);
    document.getElementById('noteInput').value = '';
    document.getElementById('noteTag').value = '';
    renderNotes();
    renderDashboard();
    addNotification('📝 أضفت ملاحظة جديدة');
});

// =============================================
// إضافة مشروع
// =============================================
document.getElementById('addProjectBtn').addEventListener('click', function() {
    const name = document.getElementById('projectName').value.trim();
    const status = document.getElementById('projectStatus').value;
    if (!name) {
        alert('الرجاء إدخال اسم المشروع');
        return;
    }
    appData.projects.push({ name, status });
    saveData(appData);
    document.getElementById('projectName').value = '';
    renderProjects();
    renderDashboard();
    addNotification(`💻 أضفت مشروع: ${name}`);
});

// =============================================
// التقويم
// =============================================
document.getElementById('prevMonth').addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) { currentMonth = 11; currentYear--; }
    renderCalendar();
});
document.getElementById('nextMonth').addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) { currentMonth = 0; currentYear++; }
    renderCalendar();
});
document.getElementById('todayCal').addEventListener('click', () => {
    const now = new Date();
    currentMonth = now.getMonth();
    currentYear = now.getFullYear();
    renderCalendar();
});

// =============================================
// الإعدادات
// =============================================
document.getElementById('saveSettings').addEventListener('click', function() {
    const name = document.getElementById('settingsName').value.trim();
    if (name) {
        appData.user.name = name;
        saveData(appData);
        renderAll();
        alert('✅ تم حفظ الإعدادات!');
    }
});

document.getElementById('exportBtn').addEventListener('click', function() {
    const data = JSON.stringify(appData, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `learning_data_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    addNotification('📤 تم تصدير البيانات');
});

document.getElementById('importBtn').addEventListener('click', function() {
    document.getElementById('importFile').click();
});
document.getElementById('importFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
        try {
            const data = JSON.parse(ev.target.result);
            appData = { ...defaultData, ...data };
            saveData(appData);
            renderAll();
            alert('✅ تم استيراد البيانات بنجاح!');
            addNotification('📥 تم استيراد البيانات');
        } catch (err) {
            alert('❌ خطأ في قراءة الملف: ' + err.message);
        }
    };
    reader.readAsText(file);
    this.value = '';
});

document.getElementById('resetBtn').addEventListener('click', function() {
    if (confirm('⚠️ هل أنت متأكد؟ سيتم حذف جميع البيانات نهائياً!')) {
        if (confirm('تأكيد نهائي: حذف كل شيء؟')) {
            localStorage.removeItem(STORAGE_KEY);
            appData = JSON.parse(JSON.stringify(defaultData));
            appData.startDate = new Date().toISOString();
            saveData(appData);
            renderAll();
            alert('🗑️ تم حذف جميع البيانات!');
        }
    }
});

// =============================================
// البحث
// =============================================
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.trim().toLowerCase();
    if (!query) {
        renderPage(currentPage);
        return;
    }
    const notes = appData.notes || [];
    const filtered = notes.filter(n => n.text.toLowerCase().includes(query) || (n.tag && n.tag.toLowerCase().includes(query)));
    const list = document.getElementById('notesList');
    if (list && currentPage === 'notes') {
        if (filtered.length === 0) {
            list.innerHTML = `<p class="empty-state">🔍 لا توجد نتائج لـ "${query}"</p>`;
        } else {
            list.innerHTML = filtered.map(n => `
                <div class="note-item">
                    <div>
                        <div class="note-text">${n.text}</div>
                        ${n.tag ? `<span class="note-tag">#${n.tag}</span>` : ''}
                        <div class="note-date">${new Date(n.date).toLocaleDateString('ar-EG')}</div>
                    </div>
                </div>
            `).join('');
        }
    }
});

// =============================================
// تسجيل الخروج
// =============================================
document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('هل تريد تسجيل الخروج؟')) {
        addNotification('🚪 تم تسجيل الخروج');
        alert('👋 تم تسجيل الخروج!');
    }
});

// =============================================
// نجوم متحركة
// =============================================
function initStars() {
    const canvas = document.getElementById('starCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);
    const stars = [];
    const numStars = 150;
    for (let i = 0; i < numStars; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.5 + 0.1,
            angle: Math.random() * Math.PI * 2
        });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        stars.forEach(star => {
            star.angle += star.speed * 0.01;
            star.x += Math.cos(star.angle) * 0.2;
            star.y += Math.sin(star.angle) * 0.2;
            if (star.x > canvas.width) star.x = 0;
            if (star.x < 0) star.x = canvas.width;
            if (star.y > canvas.height) star.y = 0;
            if (star.y < 0) star.y = canvas.height;
            const alpha = 0.3 + Math.sin(star.angle) * 0.3 + 0.3;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.fill();
            ctx.shadowColor = 'rgba(0, 212, 255, 0.3)';
            ctx.shadowBlur = 8;
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// =============================================
// التهيئة
// =============================================
function renderAll() {
    document.querySelectorAll('#dashUserName, #sidebarUserName, #settingsName').forEach(el => {
        if (el.id === 'settingsName') {
            el.value = appData.user.name || 'إبراهيم';
        } else {
            el.textContent = appData.user.name || 'إبراهيم';
        }
    });
    if (appData.theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('themeToggle').textContent = '🌙';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').textContent = '☀️';
    }
    const now = new Date();
    document.getElementById('headerDate').textContent = now.toLocaleDateString('ar-EG', {
        day: 'numeric', month: 'short', year: 'numeric'
    });
    renderPage(currentPage);
    renderNotifications();
}

// =============================================
// بدء التطبيق
// =============================================
initStars();
renderAll();

setInterval(() => {
    renderAll();
}, 30000);

console.log('🚀 منصة تعلمي - Full Stack .NET');
console.log('📅 اليوم الحالي:', getCurrentDayNumber(), 'من 180');
console.log('📊 التقدم:', getProgressPercentage(), '%');
console.log('✅ الأيام المكتملة:', getCompletedDays().length);
console.log('🔥 Streak:', getStreak(), 'يوم');
console.log('📝 ملاحظات:', appData.notes.length);
console.log('🏆 إنجازات:', appData.achievements.length);