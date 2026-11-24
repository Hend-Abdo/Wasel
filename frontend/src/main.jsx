import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  LayoutDashboard, Boxes, ClipboardList, Users, Wallet, BrainCircuit,
  Search, Bell, ChevronDown, ArrowUpLeft, ArrowDownLeft, AlertTriangle,
  TrendingUp, Package, Clock3, CircleHelp, Menu, X, Download, Filter,
  Sparkles, CheckCircle2, Warehouse, Truck, BarChart3
} from 'lucide-react';
import './styles.css';

const stock = [
  { id:'PR-1024', name:'زيت عباد الشمس 1 لتر', category:'زيوت', warehouse:'مخزن العاشر', qty:38, min:60, status:'خطر نفاد', tone:'danger', sales:142 },
  { id:'PR-1088', name:'أرز مصري 1 كجم', category:'حبوب', warehouse:'مخزن القاهرة', qty:94, min:80, status:'مستقر', tone:'good', sales:210 },
  { id:'PR-1112', name:'سكر أبيض 1 كجم', category:'سلع أساسية', warehouse:'مخزن العاشر', qty:52, min:70, status:'منخفض', tone:'warning', sales:186 },
  { id:'PR-1201', name:'مكرونة 400 جم', category:'مواد غذائية', warehouse:'مخزن الجيزة', qty:310, min:100, status:'مخزون زائد', tone:'info', sales:44 },
  { id:'PR-1240', name:'شاي 250 جم', category:'مشروبات', warehouse:'مخزن القاهرة', qty:76, min:50, status:'مستقر', tone:'good', sales:98 },
];
const orders = [
  { id:'#WS-2408', customer:'مؤسسة النور للتجارة', date:'21 نوفمبر 2026', amount:'18,450 ج.م', status:'تم التسليم', tone:'good' },
  { id:'#WS-2407', customer:'سوبر ماركت المدينة', date:'21 نوفمبر 2026', amount:'12,800 ج.م', status:'قيد التجهيز', tone:'warning' },
  { id:'#WS-2406', customer:'شركة الأمان للتوزيع', date:'20 نوفمبر 2026', amount:'32,100 ج.م', status:'متأخر', tone:'danger' },
  { id:'#WS-2405', customer:'أسواق الخير', date:'20 نوفمبر 2026', amount:'7,650 ج.م', status:'تم التسليم', tone:'good' },
];
const nav = [
  {id:'overview',label:'نظرة عامة',icon:LayoutDashboard},
  {id:'inventory',label:'إدارة المخزون',icon:Boxes},
  {id:'orders',label:'الطلبيات',icon:ClipboardList},
  {id:'customers',label:'العملاء',icon:Users},
  {id:'receivables',label:'التحصيل',icon:Wallet},
];
function App(){
  const [page,setPage] = useState('overview');
  const [mobileOpen,setMobileOpen] = useState(false);
  const [query,setQuery] = useState('');
  const [showAlerts,setShowAlerts] = useState(false);
  const [period,setPeriod] = useState('آخر 30 يوم');
  const filteredStock = useMemo(()=>stock.filter(x=>`${x.name} ${x.id} ${x.category}`.includes(query)),[query]);
  const title = nav.find(n=>n.id===page)?.label || 'نظرة عامة';
  const Sidebar = () => <aside className={`sidebar ${mobileOpen?'open':''}`}>
    <div className="brand"><div className="brand-mark"><Boxes size={22}/></div><div><b>واصل</b><small>WASEL INTELLIGENCE</small></div><button className="close-mobile" onClick={()=>setMobileOpen(false)}><X/></button></div>
    <div className="company-switch"><div className="company-avatar">م</div><div><b>شركة المثال للتوزيع</b><small>الخطة التجريبية</small></div><ChevronDown size={16}/></div>
    <div className="nav-label">القائمة الرئيسية</div>
    <nav>{nav.map(item=><button key={item.id} onClick={()=>{setPage(item.id);setMobileOpen(false)}} className={`nav-item ${page===item.id?'active':''}`}><item.icon size={18}/><span>{item.label}</span>{item.id==='inventory'&&<i className="nav-count">3</i>}</button>)}</nav>
    <div className="nav-label second">التحليلات الذكية</div>
    <button className={`nav-item ${page==='insights'?'active':''}`} onClick={()=>{setPage('insights');setMobileOpen(false)}}><BrainCircuit size={18}/><span>مساعد واصل الذكي</span><span className="new-dot"/></button>
    <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><CircleHelp size={18}/></div><b>محتاج مساعدة؟</b><p>فريقنا جاهز لمساعدتك في إدارة عملياتك.</p><button onClick={()=>alert('سيتم تفعيل مركز المساعدة في إصدار لاحق.')}>مركز المساعدة <ArrowUpLeft size={14}/></button></div><div className="profile"><div className="profile-avatar">هـ</div><div><b>مدير النظام</b><small>مدير الشركة</small></div><ChevronDown size={16}/></div></div>
  </aside>;
  const Metric = ({label,value,change,icon:Icon,kind='up',sub})=><div className="metric-card"><div className="metric-top"><span>{label}</span><div className="metric-icon"><Icon size={19}/></div></div><div className="metric-value">{value}</div><div className="metric-foot"><span className={`change ${kind}`}>{kind==='up'?<ArrowUpLeft size={14}/>:<ArrowDownLeft size={14}/>} {change}</span><span>{sub}</span></div></div>;
  const StockTable = ({rows})=><div className="table-wrap"><table><thead><tr><th>الصنف</th><th>المخزن</th><th>الكمية الحالية</th><th>حد إعادة الطلب</th><th>الحالة</th></tr></thead><tbody>{rows.map(r=><tr key={r.id}><td><div className="product-cell"><div className="product-thumb"><Package size={17}/></div><div><b>{r.name}</b><small>{r.id} · {r.category}</small></div></div></td><td>{r.warehouse}</td><td><b>{r.qty}</b> وحدة</td><td>{r.min} وحدة</td><td><span className={`status ${r.tone}`}>{r.status}</span></td></tr>)}</tbody></table></div>;
  const Header = ()=><header className="topbar"><div className="topbar-right"><button className="mobile-menu" onClick={()=>setMobileOpen(true)}><Menu/></button><div><div className="breadcrumb">الرئيسية <span>/</span> {title}</div><h1>{title}</h1></div></div><div className="top-actions"><div className="search-box"><Search size={17}/><input placeholder="ابحث عن صنف، طلب، عميل..." value={query} onChange={e=>setQuery(e.target.value)}/><kbd>⌘ K</kbd></div><div className="alert-wrap"><button className="icon-btn" onClick={()=>setShowAlerts(!showAlerts)}><Bell size={19}/><i/></button>{showAlerts&&<div className="alert-pop"><b>التنبيهات</b><p>3 أصناف تحتاج مراجعة المخزون.</p><p>طلب واحد متأخر عن موعد التسليم.</p></div>}</div><div className="top-avatar">هـ</div></div></header>;
  const Overview = ()=><>
    <div className="welcome-row"><div><div className="eyebrow"><span className="live-dot"/> لوحة متابعة مباشرة <span className="sample-tag">بيانات تجريبية</span></div><h2>صباح الخير، مدير النظام <span>👋</span></h2><p>إليك ملخص أداء عمليات التوزيع خلال الفترة المحددة.</p></div><div className="period-select"><BarChart3 size={16}/><select value={period} onChange={e=>setPeriod(e.target.value)}><option>آخر 30 يوم</option><option>آخر 7 أيام</option><option>هذا الشهر</option></select><Download size={16}/></div></div>
    <div className="metrics-grid"><Metric label="إجمالي المبيعات" value="842,500" change="12.8%" sub="مقارنة بالفترة السابقة" icon={TrendingUp}/><Metric label="الطلبيات" value="1,284" change="8.2%" sub="مقارنة بالفترة السابقة" icon={ClipboardList}/><Metric label="قيمة المخزون" value="1.26M" change="3.4%" sub="مقارنة بالفترة السابقة" icon={Warehouse} kind="down"/><Metric label="مبالغ مستحقة" value="186,240" change="5.1%" sub="تحتاج متابعة التحصيل" icon={Wallet} kind="down"/></div>
    <div className="main-grid"><section className="panel inventory-panel"><div className="panel-head"><div><h3>حالة المخزون</h3><p>الأصناف التي تحتاج إلى متابعة</p></div><button className="text-btn" onClick={()=>setPage('inventory')}>عرض كل الأصناف <ArrowUpLeft size={15}/></button></div><div className="stock-summary"><div><span className="dot danger-bg"/><b>3</b><small>تحتاج مراجعة</small></div><div><span className="dot good-bg"/><b>124</b><small>مستقرة</small></div><div><span className="dot info-bg"/><b>8</b><small>مخزون زائد</small></div></div><StockTable rows={filteredStock.slice(0,4)}/></section>
      <section className="panel ai-panel"><div className="ai-heading"><div className="ai-symbol"><Sparkles size={19}/></div><div><h3>رؤى واصل الذكية</h3><p>تنبيهات مبنية على بيانات التشغيل</p></div><span className="ai-label">AI INSIGHTS</span></div><div className="insight critical"><div className="insight-icon"><AlertTriangle size={17}/></div><div><b>احتمال نفاد زيت عباد الشمس</b><p>المخزون الحالي قد لا يكفي لتغطية متوسط الطلب المتوقع خلال الأيام القادمة.</p><small>الصنف PR-1024 · يحتاج مراجعة</small></div></div><div className="insight opportunity"><div className="insight-icon"><TrendingUp size={17}/></div><div><b>فرصة لمراجعة المخزون الراكد</b><p>مكرونة 400 جم لديها حركة بيع أقل من بقية الأصناف في البيانات التجريبية.</p><small>الصنف PR-1201 · اقتراح للمراجعة</small></div></div><button className="ai-button" onClick={()=>setPage('insights')}>استكشف التحليلات <ArrowUpLeft size={16}/></button><div className="ai-disclaimer">هذه أمثلة توضيحية وليست تنبؤات فعلية أو قرارات شراء.</div></section></div>
    <section className="panel orders-panel"><div className="panel-head"><div><h3>أحدث الطلبيات</h3><p>آخر حركة على حساب الشركة</p></div><button className="text-btn" onClick={()=>setPage('orders')}>عرض كل الطلبيات <ArrowUpLeft size={15}/></button></div><div className="table-wrap"><table><thead><tr><th>رقم الطلب</th><th>العميل</th><th>التاريخ</th><th>القيمة</th><th>الحالة</th></tr></thead><tbody>{orders.slice(0,3).map(o=><tr key={o.id}><td><b className="order-id">{o.id}</b></td><td>{o.customer}</td><td>{o.date}</td><td><b>{o.amount}</b></td><td><span className={`status ${o.tone}`}>{o.status}</span></td></tr>)}</tbody></table></div></section>
  </>;
  const Inventory = ()=><section className="panel full-panel"><div className="panel-head"><div><h3>الأصناف والمخزون</h3><p>متابعة مستويات المخزون وحدود إعادة الطلب</p></div><button className="primary-btn" onClick={()=>alert('استيراد الملفات سيكون ضمن الخطوة التالية.')}>＋ استيراد ملف مخزون</button></div><div className="filter-row"><div className="filter-chip"><Filter size={15}/> كل المخازن <ChevronDown size={14}/></div><div className="filter-chip">كل الحالات <ChevronDown size={14}/></div><span className="results-count">{filteredStock.length} أصناف في العرض التجريبي</span></div><StockTable rows={filteredStock}/></section>;
  const Orders = ()=><section className="panel full-panel"><div className="panel-head"><div><h3>الطلبيات</h3><p>عرض تجريبي لحركة الطلبات</p></div><button className="primary-btn" onClick={()=>alert('إنشاء الطلبات سيضاف بعد بناء الـ API.')}>＋ طلب جديد</button></div><div className="table-wrap"><table><thead><tr><th>رقم الطلب</th><th>العميل</th><th>التاريخ</th><th>القيمة</th><th>الحالة</th></tr></thead><tbody>{orders.map(o=><tr key={o.id}><td><b className="order-id">{o.id}</b></td><td>{o.customer}</td><td>{o.date}</td><td><b>{o.amount}</b></td><td><span className={`status ${o.tone}`}>{o.status}</span></td></tr>)}</tbody></table></div></section>;
  const Placeholder = ({kind})=><section className="panel empty-panel"><div className="empty-icon">{kind==='customers'?<Users/>:<Wallet/>}</div><h3>{kind==='customers'?'إدارة العملاء':'متابعة التحصيل'}</h3><p>هذه الوحدة موجودة ضمن خريطة المنتج، وسيتم تنفيذها بعد تثبيت تدفق المخزون الأساسي.</p><span className="status info">ضمن خطة التطوير</span></section>;
  const Insights = ()=><section className="panel full-panel"><div className="panel-head"><div><h3>مساعد واصل الذكي</h3><p>مركز تفسير المخاطر ومراجعة التوصيات</p></div><span className="sample-tag">وضع تجريبي</span></div><div className="ai-intro"><div className="ai-symbol large"><BrainCircuit size={28}/></div><div><h2>قرارات أوضح، مبنية على بياناتك</h2><p>في النسخة الحالية نعرض أمثلة توضيحية فقط. لاحقًا سيحلل واصل ملفات المخزون والمبيعات ويشرح أسباب كل تنبيه مع إظهار الحسابات ومصدر البيانات.</p></div></div><div className="recommendation"><div className="rec-top"><span className="status danger">مخاطر مخزون</span><small>مثال توضيحي · PR-1024</small></div><h3>راجع كمية زيت عباد الشمس قبل دورة الشراء القادمة</h3><p>الكمية المسجلة أقل من حد إعادة الطلب المحدد في بيانات العرض. يلزم مراجعة معدل المبيعات وفترة التوريد قبل تحديد كمية الشراء.</p><div className="rec-actions"><button className="primary-btn" onClick={()=>alert('سيتم تفعيل اعتماد التوصيات عند ربط البيانات الحقيقية.')}>تمت المراجعة</button><button className="secondary-btn" onClick={()=>alert('سيتم توفير تفاصيل الحساب مع محرك التوصيات.')}>عرض تفاصيل الحساب</button></div></div><div className="ai-disclaimer">لا يوجد اتصال بنموذج ذكاء اصطناعي حتى الآن. لن يتم تقديم أي توصية فعلية قبل ربط بيانات موثوقة واختبار الحسابات.</div></section>;
  return <div className="app-shell"><Sidebar/>{mobileOpen&&<div className="scrim" onClick={()=>setMobileOpen(false)}/>}<main className="main-content"><Header/><div className="content">{page==='overview'?<Overview/>:page==='inventory'?<Inventory/>:page==='orders'?<Orders/>:page==='insights'?<Insights/>:<Placeholder kind={page}/>}<footer>© 2026 واصل WASEL · منصة ذكاء عمليات التوزيع <span>نسخة أولية قيد التطوير</span></footer></div></main></div>
}
createRoot(document.getElementById('root')).render(<App/>);
