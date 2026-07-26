import { PageSpeedService } from './src/services/PageSpeedService'; const s = new PageSpeedService(); s.getCoreWebVitals('https://www.dailymail.co.uk/home/index.html').then(console.log);
