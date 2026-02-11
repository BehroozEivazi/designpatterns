حتماً! 😄 اینجا یک **لیست کامل و مرتب از دیزاین پترن‌های مهم و کاربردی در React** که در لایبرری‌های بزرگ هم استفاده می‌شوند، آماده کردم تا راحت کپی کنی:

---

## ✅ لیست دیزاین پترن‌های مهم در React

1. **Container / Presentational Pattern**
   - تفکیک منطق (state) از UI (نمایش).
   - مثال در Redux: `connect()` برای Container و کامپوننت‌های UI برای Presentational.

2. **Render Props Pattern**
   - اشتراک‌گذاری منطق بین کامپوننت‌ها با دادن تابع برای render.
   - مثال: `<Route render={props => <Component {...props} /> } />` (React Router v5)

3. **Higher-Order Components (HOC)**
   - تابعی که یک کامپوننت می‌گیرد و کامپوننت جدید برمی‌گرداند.
   - مثال: `connect()` در Redux، `withRouter` در React Router

4. **Compound Components**
   - مجموعه‌ای از کامپوننت‌ها که state مشترک دارند و با هم کار می‌کنند.
   - مثال: Tabs در Headless UI یا Reach UI

5. **Controlled / Uncontrolled Components**
   - Controlled: parent کنترل state دارد (`value` + `onChange`).
   - Uncontrolled: state داخل خود کامپوننت است (`defaultValue`).
   - مثال: Material UI Input, Checkbox, Select

6. **Custom / Reusable Hooks**
   - اشتراک‌گذاری منطق state و effect بدون HOC یا Render Props.
   - مثال: `useQuery` در React Query، `useNavigate` در React Router

7. **Provider / Context Pattern**
   - اشتراک‌گذاری state یا داده‌ها بین کامپوننت‌ها بدون props drilling.
   - مثال: Redux Provider, ThemeProvider در Material UI, Router در React Router

8. **State Reducer Pattern**
   - کنترل state کامپوننت‌ها با reducer که می‌توان از بیرون inject کرد.
   - مثال: Downshift, React Select

9. **Event Callback / Controlled Props**
   - کامپوننت به parent می‌گوید چه اتفاقی افتاده و parent تصمیم می‌گیرد.
   - مثال: onClick, onChange در Button و Input

10. **Lazy / Suspense Pattern**
    - بارگذاری تنبل (lazy loading) کامپوننت‌ها یا صفحات.
    - مثال: `React.lazy` + `Suspense`، React Router v6 lazy routes

11. **Error Boundary Pattern**
    - مدیریت خطاها در کامپوننت‌ها بدون crash کردن کل اپلیکیشن.
    - مثال: کلاس ErrorBoundary در React

12. **Portal Pattern**
    - رندر یک کامپوننت خارج از DOM hierarchy اصلی.
    - مثال: Modal یا Tooltip در Material UI

13. **Context + Compound Pattern**
    - ترکیب Context برای state و Compound Components برای UI انعطاف‌پذیر.
    - مثال: Tabs, Accordion در Reach UI

14. **Provider + Render Props (Hybrid)**
    - ترکیب Context/Provider با Render Props برای اشتراک‌گذاری state و کنترل UI.
    - مثال: Downshift (Autocomplete)

15. **Slot Pattern (یک شکل از Compound Components)**
    - parent component چند “slot” می‌دهد و childها در آن render می‌شوند.
    - مثال: Headless UI Dialog یا Tabs

16. **Controlled + Reducer Pattern**
    - کنترل state کامپوننت توسط parent و reducer.
    - مثال: React Select, Downshift

17. **Higher-Order State Pattern**
    - HOC برای اضافه کردن state یا logic به کامپوننت‌های stateless.
    - مثال: HOC های auth یا permission در پروژه‌های بزرگ

18. **Function as Child / Children as a Function**
    - مشابه Render Props: child یک تابع است که داده از parent می‌گیرد و render می‌کند.
    - مثال: `<Mouse>{({ x, y }) => <p>{x}, {y}</p>}</Mouse>`

19. **Event Prop Injection**
    - کامپوننت parent رفتار را inject می‌کند و کامپوننت child فقط trigger می‌کند.
    - مثال: Dropdown, Tooltip در Material UI

20. **Controlled Compound Components**
    - ترکیب Compound Components با کنترل parent.
    - مثال: Tabs یا Accordion که state فعال توسط parent کنترل می‌شود.

---

اگر بخواهی، می‌توانم یک **نسخه خلاصه و جدول‌بندی شده برای کپی و پیست سریع** درست کنم که شامل:

- نام الگو
- کاربرد
- مثال لایبرری
- مزایا

این نسخه آماده یادداشت‌برداری و مرجع سریع خواهد بود.

میخوای برات بسازم؟
