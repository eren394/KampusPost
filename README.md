#  KampusPost | React Native Mobile Application

KampusPost, üniversite öğrencilerinin sosyal ve akademik etkileşimlerini dijitalleştirmek amacıyla geliştirilmiş, modern mobil uygulama standartlarını barındıran bir platformdur. Proje, React Native mimarisi üzerine kurulu olup dinamik veri yönetimi ve asenkron iletişim özelliklerine sahiptir.

##  Öne Çıkan Teknik Özellikler

### 1. Navigasyon Mimarisi (Routing)
* **Stack Navigation:** Uygulama, `NavigationContainer` ve `createNativeStackNavigator` kullanılarak yapılandırılmış merkezi bir navigasyon sistemine sahiptir.
* **Ekran Akışı:** `LoginScreen`, `RegisterScreen` ve `HomeScreen` ekranları arası geçişler, kullanıcı deneyimini optimize edecek şekilde kurgulanmıştır.

### 2. Modüler Bileşen Tasarımı
* **CustomInput:** Kod tekrarını önlemek ve görsel bütünlüğü sağlamak amacıyla; `placeholder`, `value` ve `onChangeText` gibi özellikleri props olarak alan yeniden kullanılabilir bir giriş bileşeni geliştirilmiştir.
* **Reusability:** Giriş ve kayıt formlarındaki tüm metin alanları bu merkezi bileşen üzerinden yönetilmektedir.



### 3. API Entegrasyonu ve Veri Yönetimi
* **Asenkron Veri Çekme:** `HomeScreen` yüklendiğinde `useEffect` hook'u tetiklenerek uzak bir API'den (JSONPlaceholder) gönderi verileri (`posts`) asenkron olarak çekilmektedir.
* **Tip Güvenliği (TypeScript):** API'den dönen veriler, `userId`, `id`, `title` ve `body` alanlarını içeren `Post` interface'i ile tip güvenliği altına alınmıştır.
* **Dinamik Listeleme:** Çekilen veriler
