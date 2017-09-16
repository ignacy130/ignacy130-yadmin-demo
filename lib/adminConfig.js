AdminConfig = {
    nonAdminRedirectRoute: 'lol',
    adminEmails: ['sacha@example.com'],
    collections:
    {
        Posts: {
            icon: 'pencil',
            omitFields: ['owner'],
            tableColumns: [
              {
                label: 'Content',
                name: 'content'
              }, {
                label: 'Title',
                name: 'title'
              }, {
                label: 'User',
                name: 'owner',
                // template: 'userEmail'
              }
            ]
        }
    },
    autoForm: {
        omitFields: ['createdAt', 'updatedAt']
    },
    dashboard: {
        homeUrl: '/',
        widgets: [
          {
            template: 'adminCollectionWidget',
            data: {
              collection: 'Posts',
              "class": 'col-lg-3 col-xs-6'
            }
          }, {
            template: 'adminUserWidget',
            data: {
              "class": 'col-lg-3 col-xs-6'
            }
          }
        ]
      }
};