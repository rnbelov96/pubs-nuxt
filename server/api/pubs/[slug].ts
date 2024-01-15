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
  const { slug } = event.context.params;

  const pub = pubs.find(item => item.slug === decodeURI(slug));

  return pub;
});
