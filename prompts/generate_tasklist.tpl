# 🎯 Prompt Template: generate_tasklist.prompt

Aşağıda sana bağlam olarak `.context/` klasörü içinde üç dosya sunuyorum.  
Bu bilgiler doğrultusunda, NotDefteri adlı minimal, modern ve sadece tarayıcıda çalışan bir not alma uygulaması için yapılacak işleri sırayla belirt.

---

## 🔧 Beklentiler

- Görevleri mantıklı bir sırayla yaz (örneğin: HTML → CSS → JS modülleri → LocalStorage → UI işlevleri)
- Her görev **tek bir işi** tanımlamalı
- Gerekirse alt görevlerle detaylandır (örneğin: `3.1`, `3.2`)
- Görevler uygulanabilir olmalı, açıklama değil doğrudan "yapılacak iş" olmalı

---

## 📁 Bağlam Dosyaları

- `.context/rules.md`
- `.context/structure.md`
- `.context/ui.md`

---

## 📄 Görev Formatı

Lütfen görevleri `- [ ]` şeklinde **Markdown task listesi** olarak yaz.

---

## 📄 Örnek Format

```
- [ ] `index.html` dosyasını oluştur
- [ ] Bootstrap 5.3 CDN bağlantısını ekle
- [ ] `style.css` içinde özel stilleri tanımla
- [ ] `scripts/storage.js` içinde notları LocalStorage’a kaydeden fonksiyonları yaz
- [ ] `scripts/ui.js` içinde notları DOM’a yazan fonksiyonları oluştur
- [ ] `scripts/notes.js` içinde not ekle/sil/düzenle işlemlerini yönet
```

# 📤 Çıktı
Oluşturduğun görev listesini şu dosyaya yaz:
output/task_list.md

---

> Amaç: NotDefteri uygulamasını baştan sona oluşturacak sade, mantıklı ve uygulanabilir bir görev listesi üretmektir.