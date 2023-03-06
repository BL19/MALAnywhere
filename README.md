# MAL Anywhere

This is a proxy that will forward all get requests using axios to myanimelist

## ToDo

- Add Support for more (or all) http methods

Feel free to create a pull request for the above ToDo if you want to finalize this project

## Testing

1. Run `npm i -g netlify-cli`
2. Run `netlify dev`
3. Run a request to `http://localhost:8888/.netlify/functions/get?url=/anime/1` with the `X-MAL-CLIENT-ID` header
4. Expect a result like following:

```json
{
  "id": 1,
  "title": "Cowboy Bebop",
  "main_picture": {
    "medium": "https://api-cdn.myanimelist.net/images/anime/4/19644.jpg",
    "large": "https://api-cdn.myanimelist.net/images/anime/4/19644l.jpg"
  }
}
```
