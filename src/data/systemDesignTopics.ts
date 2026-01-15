import type { SystemDesignTopic } from '../types';

export const systemDesignTopics: SystemDesignTopic[] = [
    {
        id: 1,
        title: "Design a URL Shortener (like TinyURL)",
        difficulty: "Beginner",
        description: "Build a service that takes long URLs and creates short, unique aliases that redirect to the original URL.",
        keyConceptsToLearn: [
            "Hashing and encoding (Base62)",
            "Database design for key-value storage",
            "Handling collisions",
            "Caching strategies",
            "Analytics and click tracking"
        ],
        resources: [
            { title: "TinyURL System Design", url: "https://www.youtube.com/watch?v=fMZMm_0ZhK4" },
            { title: "Grokking: Design TinyURL", url: "https://www.designgurus.io/course-play/grokking-the-system-design-interview/doc/638c0b5dac93e7167b1c0b5a" }
        ]
    },
    {
        id: 2,
        title: "Design Twitter/X",
        difficulty: "Advanced",
        description: "Design a social media platform with tweets, follows, timelines, and notifications.",
        keyConceptsToLearn: [
            "Fan-out on write vs fan-out on read",
            "Timeline generation algorithms",
            "Database sharding strategies",
            "Caching hot tweets",
            "Real-time notifications with WebSockets"
        ],
        resources: [
            { title: "Twitter System Design", url: "https://www.youtube.com/watch?v=wYk0xPP_P_8" },
            { title: "Designing Twitter Feed", url: "https://www.hellointerview.com/learn/system-design/answer-keys/twitter" }
        ]
    },
    {
        id: 3,
        title: "Design a Rate Limiter",
        difficulty: "Intermediate",
        description: "Build a system to control the rate of requests a client can make to an API.",
        keyConceptsToLearn: [
            "Token bucket algorithm",
            "Sliding window counter",
            "Fixed window counter",
            "Distributed rate limiting",
            "Redis for rate limiting storage"
        ],
        resources: [
            { title: "Rate Limiter Design", url: "https://www.youtube.com/watch?v=mhUQe4BKZXs" },
            { title: "API Rate Limiting", url: "https://blog.bytebytego.com/p/rate-limiting-fundamentals" }
        ]
    },
    {
        id: 4,
        title: "Design Netflix/YouTube",
        difficulty: "Advanced",
        description: "Design a video streaming platform with content delivery, recommendations, and playback.",
        keyConceptsToLearn: [
            "Video transcoding and encoding",
            "Content Delivery Networks (CDN)",
            "Adaptive bitrate streaming (HLS, DASH)",
            "Recommendation engine basics",
            "Handling massive scale reads"
        ],
        resources: [
            { title: "Netflix System Design", url: "https://www.youtube.com/watch?v=psQzyFfsUGU" },
            { title: "How Netflix Works", url: "https://netflixtechblog.com/" }
        ]
    },
    {
        id: 5,
        title: "Design a Chat Application (WhatsApp/Slack)",
        difficulty: "Intermediate",
        description: "Design a real-time messaging system with 1:1 and group chats.",
        keyConceptsToLearn: [
            "WebSocket connections",
            "Message queues (Kafka, RabbitMQ)",
            "Message delivery guarantees",
            "Read receipts implementation",
            "End-to-end encryption basics"
        ],
        resources: [
            { title: "WhatsApp System Design", url: "https://www.youtube.com/watch?v=vvhC64hQZMk" },
            { title: "Designing Chat Systems", url: "https://www.hellointerview.com/learn/system-design/answer-keys/whatsapp" }
        ]
    },
    {
        id: 6,
        title: "Design a Distributed Cache (Redis)",
        difficulty: "Intermediate",
        description: "Design a distributed caching system for high-performance data access.",
        keyConceptsToLearn: [
            "Cache eviction policies (LRU, LFU)",
            "Cache-aside, write-through, write-behind patterns",
            "Consistent hashing for distribution",
            "Cache stampede prevention",
            "Replication and persistence"
        ],
        resources: [
            { title: "Redis Architecture", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
            { title: "Caching Strategies", url: "https://blog.bytebytego.com/p/a-crash-course-in-caching-part-1" }
        ]
    },
    {
        id: 7,
        title: "Design a Search Autocomplete System",
        difficulty: "Intermediate",
        description: "Build a typeahead suggestion system that provides real-time search suggestions.",
        keyConceptsToLearn: [
            "Trie data structure",
            "Ranking algorithms for suggestions",
            "Caching popular queries",
            "Handling personalization",
            "Dealing with latency requirements"
        ],
        resources: [
            { title: "Autocomplete System Design", url: "https://www.youtube.com/watch?v=us0qySiUsGU" },
            { title: "Typeahead Suggestion", url: "https://www.designgurus.io/course-play/grokking-the-system-design-interview/doc/638c0b64ac93e7167b1c0b68" }
        ]
    },
    {
        id: 8,
        title: "Design Uber/Lyft",
        difficulty: "Advanced",
        description: "Design a ride-sharing platform with location tracking, matching, and pricing.",
        keyConceptsToLearn: [
            "Geospatial indexing (Geohash, Quadtree)",
            "Real-time location tracking",
            "Matching algorithms for drivers and riders",
            "Surge pricing implementation",
            "ETA calculation"
        ],
        resources: [
            { title: "Uber System Design", url: "https://www.youtube.com/watch?v=umWABit-wbk" },
            { title: "Location-Based Services", url: "https://www.hellointerview.com/learn/system-design/answer-keys/uber" }
        ]
    },
    {
        id: 9,
        title: "Design a Web Crawler",
        difficulty: "Intermediate",
        description: "Build a scalable web crawler that efficiently indexes the internet.",
        keyConceptsToLearn: [
            "BFS vs DFS crawling strategies",
            "URL frontier management",
            "Politeness policies and robots.txt",
            "Duplicate content detection",
            "Distributed crawling architecture"
        ],
        resources: [
            { title: "Web Crawler Design", url: "https://www.youtube.com/watch?v=BKZxZwUgL3Y" },
            { title: "Building a Crawler", url: "https://www.designgurus.io/course-play/grokking-the-system-design-interview/doc/638c0b67ac93e7167b1c0b6c" }
        ]
    },
    {
        id: 10,
        title: "Design a Notification System",
        difficulty: "Beginner",
        description: "Design a system that sends notifications via email, SMS, and push notifications.",
        keyConceptsToLearn: [
            "Message queue for async processing",
            "Rate limiting per user",
            "Template management",
            "Delivery tracking and retries",
            "User preference management"
        ],
        resources: [
            { title: "Notification System Design", url: "https://www.youtube.com/watch?v=bBTPZ9NdSk8" },
            { title: "Push Notification Architecture", url: "https://blog.bytebytego.com/p/how-to-design-a-notification-system" }
        ]
    },
    {
        id: 11,
        title: "Design Instagram",
        difficulty: "Intermediate",
        description: "Design a photo-sharing social network with feeds, stories, and interactions.",
        keyConceptsToLearn: [
            "Image storage and CDN",
            "News feed generation",
            "Database schema for social graphs",
            "Like and comment systems",
            "Hashtag and search functionality"
        ],
        resources: [
            { title: "Instagram System Design", url: "https://www.youtube.com/watch?v=VJpfO6KdyWE" },
            { title: "Instagram Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/instagram" }
        ]
    },
    {
        id: 12,
        title: "Design a Key-Value Store (DynamoDB)",
        difficulty: "Advanced",
        description: "Design a distributed NoSQL database that provides high availability and partition tolerance.",
        keyConceptsToLearn: [
            "Consistent hashing",
            "Replication strategies",
            "Vector clocks for conflict resolution",
            "Quorum reads and writes",
            "Gossip protocol"
        ],
        resources: [
            { title: "DynamoDB Design", url: "https://www.youtube.com/watch?v=sF5k1ij2NAg" },
            { title: "Amazon Dynamo Paper", url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf" }
        ]
    },
    {
        id: 13,
        title: "Design a Load Balancer",
        difficulty: "Beginner",
        description: "Design a system that distributes incoming traffic across multiple servers.",
        keyConceptsToLearn: [
            "Load balancing algorithms (Round Robin, Least Connections)",
            "Layer 4 vs Layer 7 load balancing",
            "Health checks",
            "Session persistence",
            "SSL termination"
        ],
        resources: [
            { title: "Load Balancer Deep Dive", url: "https://www.youtube.com/watch?v=sCR3SAVdyCc" },
            { title: "Load Balancing Fundamentals", url: "https://blog.bytebytego.com/p/ep25-load-balancing-the-secret-behind" }
        ]
    },
    {
        id: 14,
        title: "Design Google Maps",
        difficulty: "Advanced",
        description: "Design a mapping service with navigation, real-time traffic, and location search.",
        keyConceptsToLearn: [
            "Graph algorithms for routing (Dijkstra, A*)",
            "Map tile rendering",
            "Real-time traffic integration",
            "Points of interest indexing",
            "Offline map support"
        ],
        resources: [
            { title: "Google Maps Design", url: "https://www.youtube.com/watch?v=jk3yvVfNvds" },
            { title: "Navigation System Design", url: "https://www.hellointerview.com/learn/system-design/answer-keys/google-maps" }
        ]
    },
    {
        id: 15,
        title: "Design Dropbox/Google Drive",
        difficulty: "Intermediate",
        description: "Design a file storage and synchronization service across multiple devices.",
        keyConceptsToLearn: [
            "File chunking and deduplication",
            "Sync conflict resolution",
            "Block storage vs object storage",
            "Metadata management",
            "Offline sync capabilities"
        ],
        resources: [
            { title: "Dropbox System Design", url: "https://www.youtube.com/watch?v=U0xTu6E2CT8" },
            { title: "File Sync Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/dropbox" }
        ]
    },
    {
        id: 16,
        title: "Design a Payment System (Stripe)",
        difficulty: "Advanced",
        description: "Design a secure payment processing platform handling millions of transactions.",
        keyConceptsToLearn: [
            "Idempotency for payment retries",
            "Two-phase commit",
            "PCI compliance considerations",
            "Fraud detection basics",
            "Ledger and reconciliation"
        ],
        resources: [
            { title: "Payment System Design", url: "https://www.youtube.com/watch?v=olfaBgJrUBI" },
            { title: "Designing Payment Systems", url: "https://blog.bytebytego.com/p/how-to-design-a-secure-web-api-access" }
        ]
    },
    {
        id: 17,
        title: "Design Amazon/E-commerce Platform",
        difficulty: "Advanced",
        description: "Design an e-commerce platform with product catalog, cart, and checkout.",
        keyConceptsToLearn: [
            "Product catalog design",
            "Inventory management",
            "Shopping cart implementation",
            "Order processing pipeline",
            "Recommendation engine integration"
        ],
        resources: [
            { title: "E-commerce System Design", url: "https://www.youtube.com/watch?v=EpASu_1dUdE" },
            { title: "Amazon Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/amazon" }
        ]
    },
    {
        id: 18,
        title: "Design a Booking System (Airbnb)",
        difficulty: "Intermediate",
        description: "Design a reservation system handling availability, booking, and search.",
        keyConceptsToLearn: [
            "Availability calendar management",
            "Handling concurrent bookings",
            "Search with filters and geolocation",
            "Pricing strategies",
            "Review and rating systems"
        ],
        resources: [
            { title: "Airbnb System Design", url: "https://www.youtube.com/watch?v=YyOXt2LS3pk" },
            { title: "Booking System Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/airbnb" }
        ]
    },
    {
        id: 19,
        title: "Design a Ticket Booking System (BookMyShow)",
        difficulty: "Intermediate",
        description: "Design a system for booking movie or event tickets with seat selection.",
        keyConceptsToLearn: [
            "Seat locking and reservation",
            "Handling high concurrency",
            "Preventing double booking",
            "Timeout for incomplete bookings",
            "Event-driven architecture"
        ],
        resources: [
            { title: "Ticket Booking Design", url: "https://www.youtube.com/watch?v=lBAwJgoO3Ek" },
            { title: "BookMyShow Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/ticketmaster" }
        ]
    },
    {
        id: 20,
        title: "Design a News Feed System",
        difficulty: "Intermediate",
        description: "Design a personalized content feed like Facebook or LinkedIn.",
        keyConceptsToLearn: [
            "Pull vs push models",
            "Feed ranking algorithms",
            "Real-time updates",
            "Caching strategies for feeds",
            "Handling celebrities (high follower count)"
        ],
        resources: [
            { title: "News Feed System Design", url: "https://www.youtube.com/watch?v=QmX2NPkJTKg" },
            { title: "Facebook News Feed", url: "https://www.designgurus.io/course-play/grokking-the-system-design-interview/doc/638c0b61ac93e7167b1c0b62" }
        ]
    },
    {
        id: 21,
        title: "Design a Distributed Message Queue (Kafka)",
        difficulty: "Advanced",
        description: "Design a high-throughput distributed messaging system.",
        keyConceptsToLearn: [
            "Partitioning and ordering",
            "Consumer groups",
            "Offset management",
            "Replication and fault tolerance",
            "At-least-once vs exactly-once delivery"
        ],
        resources: [
            { title: "Kafka System Design", url: "https://www.youtube.com/watch?v=UEg40Te8pnE" },
            { title: "Message Queue Design", url: "https://blog.bytebytego.com/p/why-is-kafka-so-fast" }
        ]
    },
    {
        id: 22,
        title: "Design a Metrics Monitoring System (Datadog)",
        difficulty: "Intermediate",
        description: "Design a system to collect, store, and visualize application metrics.",
        keyConceptsToLearn: [
            "Time-series databases",
            "Data aggregation strategies",
            "Alerting mechanisms",
            "Dashboard visualization",
            "Handling high cardinality data"
        ],
        resources: [
            { title: "Monitoring System Design", url: "https://www.youtube.com/watch?v=kIcq1_pBQSY" },
            { title: "Metrics Collection Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/datadog" }
        ]
    },
    {
        id: 23,
        title: "Design a Content Delivery Network (CDN)",
        difficulty: "Intermediate",
        description: "Design a globally distributed system for fast content delivery.",
        keyConceptsToLearn: [
            "Edge server architecture",
            "Cache invalidation strategies",
            "DNS-based routing",
            "Origin shields",
            "Video streaming optimization"
        ],
        resources: [
            { title: "CDN System Design", url: "https://www.youtube.com/watch?v=8zX0rue2Hic" },
            { title: "How CDNs Work", url: "https://blog.bytebytego.com/p/how-does-a-cdn-work" }
        ]
    },
    {
        id: 24,
        title: "Design a Unique ID Generator",
        difficulty: "Beginner",
        description: "Design a distributed system to generate unique IDs at scale.",
        keyConceptsToLearn: [
            "UUID vs sequential IDs",
            "Twitter Snowflake algorithm",
            "Database auto-increment alternatives",
            "Handling clock skew",
            "ID collision prevention"
        ],
        resources: [
            { title: "Unique ID Generator", url: "https://www.youtube.com/watch?v=tPX1Yxe4Cfc" },
            { title: "Snowflake ID Design", url: "https://blog.bytebytego.com/p/ep47-how-to-generate-unique-ids" }
        ]
    },
    {
        id: 25,
        title: "Design a Pastebin",
        difficulty: "Beginner",
        description: "Design a service to store and share text snippets with unique URLs.",
        keyConceptsToLearn: [
            "URL shortening techniques",
            "Content expiration policies",
            "Rate limiting for abuse prevention",
            "Syntax highlighting options",
            "Privacy and access controls"
        ],
        resources: [
            { title: "Pastebin System Design", url: "https://www.youtube.com/watch?v=josjRSBqEBI" },
            { title: "Designing Pastebin", url: "https://www.educative.io/courses/grokking-the-system-design-interview/m2ygV4E81AR" }
        ]
    },
    {
        id: 26,
        title: "Design Slack",
        difficulty: "Advanced",
        description: "Design a team collaboration platform with channels, messaging, and integrations.",
        keyConceptsToLearn: [
            "Real-time messaging architecture",
            "Channel and thread data models",
            "Search across messages",
            "File sharing and storage",
            "Third-party integrations (webhooks)"
        ],
        resources: [
            { title: "Slack System Design", url: "https://www.youtube.com/watch?v=vMZYt_8RqMQ" },
            { title: "Slack Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/slack" }
        ]
    },
    {
        id: 27,
        title: "Design a Distributed Lock Service",
        difficulty: "Intermediate",
        description: "Design a service for coordinating access to shared resources across distributed systems.",
        keyConceptsToLearn: [
            "Redlock algorithm",
            "Zookeeper for coordination",
            "Fencing tokens",
            "Lock timeout and renewal",
            "Deadlock prevention"
        ],
        resources: [
            { title: "Distributed Locks", url: "https://www.youtube.com/watch?v=v7x75aN9liM" },
            { title: "Redis Distributed Locks", url: "https://redis.io/docs/manual/patterns/distributed-locks/" }
        ]
    },
    {
        id: 28,
        title: "Design a Search Engine (Google)",
        difficulty: "Advanced",
        description: "Design a web search engine with crawling, indexing, and ranking.",
        keyConceptsToLearn: [
            "Inverted index data structure",
            "PageRank algorithm basics",
            "Query parsing and processing",
            "Spell correction and suggestions",
            "Relevance scoring"
        ],
        resources: [
            { title: "Search Engine Design", url: "https://www.youtube.com/watch?v=CeGtqouT8eA" },
            { title: "Google Search Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/google-search" }
        ]
    },
    {
        id: 29,
        title: "Design a Food Delivery App (DoorDash)",
        difficulty: "Intermediate",
        description: "Design a platform connecting restaurants, customers, and delivery drivers.",
        keyConceptsToLearn: [
            "Real-time order tracking",
            "Driver dispatch and routing",
            "Restaurant availability management",
            "ETA prediction",
            "Order batching for efficiency"
        ],
        resources: [
            { title: "Food Delivery Design", url: "https://www.youtube.com/watch?v=iRhSAR3ldTw" },
            { title: "DoorDash Architecture", url: "https://www.hellointerview.com/learn/system-design/answer-keys/doordash" }
        ]
    },
    {
        id: 30,
        title: "Design a Distributed Task Scheduler",
        difficulty: "Intermediate",
        description: "Design a system to schedule and execute tasks across multiple workers.",
        keyConceptsToLearn: [
            "Job queue management",
            "Cron expression parsing",
            "Worker health monitoring",
            "Task retry and failure handling",
            "Priority queuing"
        ],
        resources: [
            { title: "Task Scheduler Design", url: "https://www.youtube.com/watch?v=cJC2dqsXGnA" },
            { title: "Distributed Scheduling", url: "https://www.hellointerview.com/learn/system-design/answer-keys/task-scheduler" }
        ]
    }
];
