## Seneca Toggles Task

#### Requirements 
* node 8.*
* npm 5.*

### Set up
in your favourite terminal

```
git clone https://github.com/LukaszK88/toggles-task.git
cd toggles-task
npm run start:dev
```
go to [http://0.0.0.0:8090/](http://0.0.0.0:8090/)

### Tests
to run tests run
```
npm run test
```

### Project

* React 16.4
* Webpack v4
* Typescript
* Sass
* Jest/Enzyme

In file `./src/pages/Toggles/Toggles.tsx` method `questionService.getQuestion();` can accept options number, just to mock different option number scenarios. Default options equal to 4,
 if you wish you can render less than that or simply add more options to mock api response in `./src/data/questionResponse.json`.
 
 
