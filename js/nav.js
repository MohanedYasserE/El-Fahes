document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const aside = document.querySelector('aside'); // إضافة مرجع لعنصر aside

    // تبديل حالة القائمة عند النقر على زر البرجر
    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
        burger.classList.toggle('toggle');
        
        // إخفاء/إظهار جزء aside عند تفعيل/إلغاء تفعيل القائمة في مقاس الهواتف
        if (window.innerWidth <= 768) {
            if (nav.classList.contains('active')) {
                // إذا تم فتح القائمة، أخفِ aside
                if (aside) aside.style.display = 'none';
            } else {
                // إذا تم إغلاق القائمة، أظهر aside
                if (aside) aside.style.display = 'flex';
            }
        }
    });

    // إعادة ضبط حالة aside عند تغيير حجم النافذة
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // في الشاشات الكبيرة، تأكد من أن aside ظاهر دائمًا
            if (aside) aside.style.display = 'flex';
        } else {
            // في الشاشات الصغيرة، اعتمد على حالة القائمة
            if (nav.classList.contains('active')) {
                if (aside) aside.style.display = 'none';
            } else {
                if (aside) aside.style.display = 'flex';
            }
        }
    });
});
