export class SessionData {
  createDb() {
    let sessions = [
      {
        id: 1,
        title: 'Introduction to Angular 2',
        start: '18:00',
        end: '18:30'
      },
      {
        id: 2,
        title: 'Introduction to TypeScript',
        start: '18:30',
        end: '17:00'
      },
      {
        id: 3,
        title: 'Hands-on with Angular 2',
        start: '17:00',
        end: '17:30'
      }
    ];

    return {sessions};
  }
}
