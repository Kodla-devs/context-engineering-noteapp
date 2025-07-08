# 🎨 UI – NotDefteri

Bu belge, uygulamanın kullanıcı arayüzüne (UI) dair görsel beklentileri açıklar.

---

## 🎯 Tasarım Prensipleri

- Arayüz sade ve modern görünmeli.
- Not kartları renkli, köşeleri yuvarlatılmış ve gölgeli olmalı.
- Ekran dolu görünmeli; boşluk hissi yaratılmamalı.
- Responsive yapı zorunludur (mobil, tablet, masaüstü uyumlu).
- Not ekleme alanı belirgin ve sade olmalı.
- Tüm etkileşim alanları (buton, kart) kolayca fark edilmeli.
- Bootstrap sınıfları aktif şekilde kullanılmalı (`container`, `card`, `btn` vs.)

---

## 🧱 UI Bileşenleri

- **Not Kartı (card)**:  
  Başlık ve içerik gösterilir, `Bootstrap card` sınıfı ile şık görünür.  
  Arka plan renkleri değişebilir.

- **Not Ekleme Alanı**:  
  Başlık ve içerik girişi için iki alan, altında "Kaydet" butonu yer alır.  
  Form sade, hatasız ve sezgisel olmalı.

- **Butonlar**:  
  Bootstrap `btn` sınıfları kullanılır. Farklı aksiyonlar için farklı renkler.

---

## 📱 Mobil Uyumluluk

- Kartlar mobilde tek sütun olmalı.
- Input alanları ve butonlar parmakla kolayca kullanılabilir boyutta olmalı.
- Gerekiyorsa `container` veya `row` sınıflarıyla hizalama sağlanmalı.

---

> Amaç: Az sayıda öğeyle sade ama etkileyici bir arayüz sunmak.
