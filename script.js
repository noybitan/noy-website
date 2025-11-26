// קוד JavaScript ליצירת אינטראקציה פשוטה - נדרש במטלה.

// 1. מוצאים את הכפתור ואת האלמנט הנסתר שצריך להציג/להסתיר
const toggleButton = document.getElementById('js-toggle-btn');
const secretMessageDiv = document.getElementById('secret-message');

// 2. מוסיפים מאזין לאירוע לחיצה (click) על הכפתור
if (toggleButton && secretMessageDiv) {
    toggleButton.addEventListener('click', () => {
        
        // 3. הוספה או הסרה של המחלקה 'visible'
        // המחלקה 'visible' שולטת בהופעת הרכיב ב-CSS ומשתמשת במעברים (transitions).
        secretMessageDiv.classList.toggle('visible');

        // 4. שינוי הטקסט בכפתור כדי שיתאים למצב הנוכחי 
        if (secretMessageDiv.classList.contains('visible')) {
            toggleButton.textContent = 'הסתר את ההודעה הסודית';
        } else {
            toggleButton.textContent = 'לחץ לחשיפת הודעה סודית';
        }
    });
}