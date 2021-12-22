# Ödev 1

Kullanıcılar, etkinlikler, etkinliklerin yapılacağı konum ve etkinlik katılımcılarını size sağlanan veri seti üzerinden görüntüleyebilecek bir GraphQL sunucu oluşturmanız gerekiyor.

## Gereksinimler

- [x] [Şuradaki](https://github.com/Kodluyoruz/taskforce/blob/main/graphql/odev-01/data.json) veri seti kullanılarak bir GraphQL sunucusu ayağa kaldırılmalıdır.
- [x] Temel olarak `User`, `Event`, `Location` ve `Participant` tiplerini oluşturmalısınız. Bu tiplerle alakalı fieldları veri seti üzerinden görüntüleyebilirsiniz.
- [x] Bir `User`'a ait bir veya birden fazla `Event` olabilir.
- [x] Bir `Event`, bir `User` ile ilişkili olmalıdır.
- [x] Bir `Event`, bir `Location` ile ilişkili olmalıdır.
- [x] Bir `Event` birden fazla `Participant` ile ilişkili olmalıdır`.
- [x] Tüm tipler üzerinde tümünü listeleme ve id bazlı bir kaydı getirme Query'leri yazılmalıdır.

Günün sonunda aşağıdaki Query'ler çalışır vaziyette olmalıdır.

```
  query users{}
  query user(id: 1){}

  query events{}
  query event(id: 1){}
  query events{
    id
    title
    user{
      id
      username
    }
    pariticipants{
      id
      username
    }
    location{
      id
      name
    }
  }

  query locations{}
  query location(id: 1){}

  query participants{}
  query participant(id: 1){}

```

# Ödev 2

Bu ödevde göreviniz, tüm tiplerle alakalı oluşturma, güncelleme, silme ve tümünü silme Mutation'larını hazırlamak olacak.

## Gereksinimler

- [x] Yeni bir User ekleyecek Mutation yazılmalıdır.
- [x] Bir User'ı güncelleyecek olan Mutation yazılmalıdır.
- [x] Bir User'ı silecek olan Mutation yazılmalıdır.
- [x] Tüm User'ları silecek olan Mutation yazılmalıdır.
- [x] Yukarıdaki maddeler Event, Location ve Participant için de uygulanmalıdır.

Günün sonunda aşağıdaki Mutation'lar çalışır vaziyette olmalıdır.

```
  mutation addUser
  mutation updateUser
  mutation deleteUser
  mutation deleteAllUsers

  mutation addEvent
  mutation updateEvent
  mutation deleteEvent
  mutation deleteAllEvents

  mutation addLocation
  mutation updateLocation
  mutation deleteLocation
  mutation deleteAllLocations

  mutation addParticipant
  mutation updateParticipant
  mutation deleteParticipant
  mutation deleteAllParticipants
```
