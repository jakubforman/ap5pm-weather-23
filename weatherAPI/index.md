# WeatherAPI 
FIX problému:

Ve funkci ```checkItemsThatAreInLocalStorage()``` nahraďte řádek:
```ts
const selectedItems = JSON.parse("selectedItems");
```
řádkem:
```ts
const selectedItems = JSON.parse(storedItems);
```
Pak bude vše fungovat. :)

```html

```
