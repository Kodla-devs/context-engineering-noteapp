# Context Engineering Noteapp

Bu repo, **Context Engineering** yaklaşımıyla geliştirilmiş sade ve responsive bir not alma uygulamasını içerir.  
Gemini CLI ile çalışan bu yapı, bağlam dosyalarına göre görev listesi üretir ve ardından uygulamayı otomatik olarak oluşturur.

---

## 📦 Klasör Yapısı

```
context-engineering-noteapp/
├── .context/             # Kurallar, yapı ve UI beklentileri
│   ├── rules.md
│   ├── structure.md
│   └── ui.md
│
├── prompts/              # Gemini CLI şablonları
│   ├── generate_tasklist.tpl
│   └── execute_tasks.tpl
│
├── commands/             # Komut metinleri
│   ├── generate_tasks.txt
│   └── execute_tasks.txt
│
├── output/               # Üretilen görevler ve uygulama çıktısı
│   ├── task_list.md
│   └── notdefteri/       # Not alma uygulaması (HTML, CSS, JS)
│       ├── index.html
│       ├── style.css
│       └── scripts/
│           ├── storage.js
│           ├── notes.js
│           └── ui.js
│
└── README.md             # Bu dosya
```

---

## 🧪 Kullanım – Gemini CLI ile Çalıştırma

### 🔹 1. Görev Listesi Üretimi

İlk olarak bağlam dosyalarına göre görev listesi (`task_list.md`) oluşturmak için:

```bash
@generate_tasks.txt do it
```

Bu komut, `.context` altındaki tüm `rules`, `structure` ve `ui` dosyalarını analiz eder ve `output/task_list.md` dosyasını üretir.

---

### 🔹 2. Görevlerin Otomatik Olarak Gerçekleştirilmesi

Üretilen görev listesine göre uygulama dosyalarını oluşturmak için:

```bash
@execute_tasks.txt do it
```

Bu komut, `task_list.md` dosyasındaki görevleri sırasıyla yerine getirir ve sonuçları `output/notdefteri/` klasörüne kaydeder.

---

## ✨ Context Engineering Dosyaları

| Dosya                     | Açıklama                                                           |
|--------------------------|--------------------------------------------------------------------|
| `.context/rules.md`      | Uygulamada uyulması gereken kurallar ve kaçınılması gereken yapılar |
| `.context/structure.md`  | Projenin dosya/klasör yapısı ve teknolojik çerçevesi               |
| `.context/ui.md`         | UI beklentileri, tasarım prensipleri ve mobil uyumluluk detayları |

---

## 📝 Not Alma Uygulaması Özeti

| Özellik             | Açıklama                                                  |
|---------------------|-----------------------------------------------------------|
| Not Ekleme          | Başlık ve içerik girerek yeni not oluşturulur            |
| Not Silme           | Her notun sil butonu vardır                               |
| Not Güncelleme      | Not form alanına geri yüklenerek düzenlenebilir          |
| Depolama            | Tüm veriler `localStorage` üzerinde saklanır             |
| Mobil Uyumluluk     | Responsive yapı sayesinde tüm cihazlarda düzgün görünür  |
| Kullanılan Teknolojiler | HTML5, CSS3, Bootstrap 5.3+, JavaScript (ES2021)        |

---

## 📎 Bağlantılar

- Context Engineering hakkında daha fazla bilgi: [Context Engineering Nedir?](https://github.com/Wirasm/PRPs-agentic-eng)
- Gemini CLI: [Gemini CLI Dokümantasyonu](https://deepmind.google/discover/gemini)

---

## 🧠 Neden Context Engineering?

Bu repo, yapay zekanın **halüsinasyon üretimini azaltmak**, çıktıları kontrol altında tutmak ve **profesyonel düzeyde otomatik üretim** yapmak için `context engineering` yaklaşımını nasıl kullandığını canlı olarak gösterir.

---

> Bu proje yalnızca eğitim ve deneysel amaçlar içindir.  
