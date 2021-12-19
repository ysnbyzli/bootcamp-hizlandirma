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

## Query'ler

```
query getAllUser {
  users {
    id
    username
    email
    events {
      id
      title
      desc
    }
  }
}

query getAllEvent {
  events {
    id
    title
    desc
    date
    from
    to
    location {id name}
    user {id username}
    participants {id username}
  }
}

query getAllLocation {
  locations {
    id
    name
    desc
    lat
    lng
  }
}

query getAllParticipant {
  participants {
    id
    user_id
    event_id
  }
}

query getUserById {
  user(id: 3) {
    id
    username
    email
  }
}

query getEventById {
  event(id: 12) {
    id
    title
    desc
    date
    from
    to
    location_id
    user_id
  }
}

query getLocationById {
  location(id: 14) {
    id
    name
    desc
    lat
    lng
  }
}

query getParticipantById {
  participant(id: 43) {
    id
    user_id
    event_id
  }
}
```
