// components/HomeScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';

// 1. Post verilerinin yapısını tanımlayan Interface (Ödev Adım 4)
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const HomeScreen = () => {
    // State'ler
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true); 

    // 2. useEffect hook'u ile veri çekme işlemi (Ödev Adım 4)
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true); 
                
                // API'dan veri çekme: https://jsonplaceholder.typicode.com/posts
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data: Post[] = await response.json();

                setPosts(data); // State'e kaydetme
                console.log("API'dan çekilen gönderi verileri:", data); // Konsola yazdırma
            } catch (error) {
                console.error("Veri çekme hatası:", error);
            } finally {
                setLoading(false); 
            }
        };
        fetchPosts();
    }, []); 

    // 3. Yüklenme durumu kontrolü (Ödev Teslimatı Adım 5 için gereklidir)
    if (loading) {
      return (
        <View style={[styles.container, styles.center]}>
          <ActivityIndicator size="large" color="#1E90FF" />
          <Text style={styles.loadingText}>Gönderiler yükleniyor...</Text>
        </View>
      );
    }
    
    // Her bir post öğesini render edecek fonksiyon (Ödev Adım 5)
    const renderPostItem = ({ item }: { item: Post }) => (
      <View style={styles.postItem}>
        {/* Post başlığı (title): Kalın veya daha büyük yazı */}
        <Text style={styles.postTitle}>{item.title}</Text> 
        {/* Post içeriği (body): Normal metin */}
        <Text style={styles.postBody}>{item.body}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.header}>KampusPost Akışınız ({posts.length} Gönderi)</Text>
        
        {/* FlatList bileşeni ile listeleme */}
        <FlatList
          data={posts} 
          renderItem={renderPostItem} 
          keyExtractor={(item) => item.id.toString()} 
          contentContainerStyle={styles.listContent}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  listContent: {
      paddingBottom: 10,
  },
  postItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 6,
    borderRadius: 8,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  postBody: {
    fontSize: 14,
    color: '#666',
  }
});

export default HomeScreen;