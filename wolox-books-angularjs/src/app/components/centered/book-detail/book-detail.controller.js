angular.module('app').controller('BookDetailController', [
  function () {
    this.book = {
      id: 1,
      author: 'Dr. Marilie Greenholt',
      title: 'Consider Phlebas',
      genre: 'Tall tale',
      publisher: 'Macmillan Publishers',
      year: '1956',
      image_url: null,
      // image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg',
      actual_rent: {
        id: 12,
        from: '2017-01-02',
        to: '2017-01-05',
        book_id: 1,
        user_id: 1,
        returned_at: null
      }
    };

    this.books = [
      {
        id: 1,
        author: 'Emmie Thiel',
        title: 'Ring of Bright Water',
        genre: 'Short story',
        publisher: 'Butterworth-Heinemann',
        year: '1968',
        image_url: null
      },
      {
        id: 2,
        author: 'Christopher Pike',
        title: 'Scavenger Hunt',
        genre: 'other',
        publisher: 'Pocket Books',
        year: '1989',
        image_url: null
      },
      {
        id: 3,
        author: 'Lois Duncan',
        title: 'Locked in time',
        genre: 'suspense',
        publisher: 'Little, Brown',
        year: '1985',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg'
      },
      {
        id: 4,
        author: 'Christopher Pike',
        title: 'Scavenger Hunt',
        genre: 'suspense',
        publisher: 'Pocket Books',
        year: '1989',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
      },
      {
        id: 5,
        author: 'Christopher Pike',
        title: 'Scavenger Hunt',
        genre: 'suspense',
        publisher: 'Pocket Books',
        year: '1989',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg'
      },
      {
        id: 6,
        author: 'Paula Hawkins',
        title: 'The Girl on the Train\n',
        genre: 'suspense',
        publisher: 'Riverhead Books',
        year: '2015',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg'
      },
      {
        id: 7,
        author: 'Anthony Doerr',
        title: 'All the Light We Cannot See',
        genre: 'suspense',
        publisher: 'Scribner',
        year: '2014',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg'
      },
      {
        id: 8,
        author: 'John Katzenbach',
        title: 'The analyst',
        genre: 'thriller',
        publisher: 'Ballantine Books',
        year: '2003',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg'
      },
      {
        id: 9,
        author: 'Andy Weir',
        title: 'The Martian',
        genre: 'fiction',
        publisher: 'Crown Publishing Group',
        year: '2011',
        image_url: 'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg'
      }
    ];

    this.comments = [
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        name: 'Name surname',
        userImage: '../../assets/default_book.svg',
        date: '01/01/2019',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    ];
  }
]);
