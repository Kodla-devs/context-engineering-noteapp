# 🗂️ Structure – NotDefteri

Bu belge, projenin klasör ve dosya yapısını ve kullanılan teknolojileri özetler.

---

## 📁 Klasör Yapısı

```
notdefteri/
├── index.html # Ana HTML dosyası
├── style.css # Özel stil tanımları
├── scripts/ # JavaScript modülleri
│ ├── storage.js # LocalStorage işlemleri
│ ├── notes.js # Not ekle, sil, düzenle fonksiyonları
│ └── ui.js # Notların ekrana yazılması ve silinmesi
└── README.md # Proje açıklaması
```

---

## 🔁 Desteklenen İşlevler

| İşlev         | Açıklama                                                   |
| ------------- | ---------------------------------------------------------- |
| Not ekleme    | Başlık ve içerik alanı girilerek yeni bir not oluşturulur. |
| Not silme     | Her notun üzerinde bulunan sil butonu ile not silinebilir. |
| Not düzenleme | Mevcut bir not, form alanına getirilerek güncellenebilir.  |

## 💻 Kullanılan Teknolojiler

| Alan     | Teknoloji                    |
| -------- | ---------------------------- |
| HTML     | HTML5                        |
| CSS      | CSS3 + Bootstrap 5.3 (CDN)   |
| JS       | Vanilla JavaScript (ES2021+) |
| Depolama | Web API → `localStorage`     |

---

## 📦 Dosya Notları

- **`index.html`**: Bootstrap dahil edilir, tüm yapılar burada bağlanır.
- **`style.css`**: Bootstrap dışında kalan özel stiller buraya yazılır.
- **`scripts/`**: Her işlev ayrı dosyaya ayrılır, modüler yapı korunur.

---

> Bu yapı sadeliği korur ve yapay zekanın dosyaları doğru yere yerleştirmesini kolaylaştırır.
