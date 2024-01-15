const pubs = [
  {
    id: '1',
    name: 'Какой-то заговолок 1',
    slug: 'Какой-то-заговолок-1',
    userName: 'Петр Петров',
    images: [
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/300/300',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/300',
    ],
  },
  {
    id: '2',
    name: 'Какой-то заговолок 2',
    slug: 'Какой-то-заговолок-2',
    userName: 'Петр Петров',
    images: [
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/300/300',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/300',
    ],
  },
  {
    id: '3',
    name: 'Какой-то заговолок 3',
    slug: 'Какой-то-заговолок-3',
    userName: 'Петр Петров',
    images: [
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/300/300',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/300',
    ],
  },
  {
    id: '4',
    name: 'Какой-то заговолок 4',
    slug: 'Какой-то-заговолок-4',
    userName: 'Петр Петров',
    images: [
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/300/300',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/300',
    ],
  },
  {
    id: '5',
    name: 'Какой-то заговолок 5',
    slug: 'Какой-то-заговолок-5',
    userName: 'Петр Петров',
    images: [
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/300/300',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/300',
    ],
  },
  {
    id: '6',
    name: 'Какой-то заговолок 6',
    slug: 'Какой-то-заговолок-6',
    userName: 'Петр Петров',
    images: [
      'https://placekitten.com/200/300',
      'https://placekitten.com/200/300',
      'https://placekitten.com/300/300',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/300',
    ],
  },
];

export default defineEventHandler(async event => {
  if (event.node.req.method === 'POST') {
    return 'success';
  }

  const { page } = getQuery(event);

  if (isNaN(page) || Number(page) > Math.ceil(pubs.length / 2) || Number(page) === 1) {
    return {
      prevPage: null,
      items: pubs.slice(0, 2),
      nextPage: 2,
    };
  }
  if (Number(page) === Math.ceil(pubs.length / 2)) {
    return {
      prevPage: Math.ceil(pubs.length / 2) - 1,
      items: pubs.slice(pubs.length - 2, pubs.length),
      nextPage: null,
    };
  }

  return {
    prevPage: Number(page) - 1,
    items: pubs.slice((Number(page) - 1) * 2, Number(page) * 2),
    nextPage: Number(page) + 1,
  };
});
