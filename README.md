<<<<<<< HEAD
# Univ Some

> 이 프로젝트는 [Create React Native App](https://github.com/react-community/create-react-native-app)으로 bootstrap되었습니다.

## Development

### Getting started

#### 1. Clone the repository

repository를 clone해 **local repository**를 만듭니다. 명령 실행 즉시 univsome-plus 디렉토리가 만들어지니 실행 전에 디렉토리가 만들어지길 원하는 위치로 이동해야 합니다.

```bash
$ git clone https://github.com/ajou-pioneer/univsome-plus.git
```

#### 2. Install dependencies

univsome-plus 디렉토리로 이동해 package.json에 명시된 node 패키지를 설치합니다.

```bash
$ cd univsome-plus
$ npm install
```

### Git-flow

개발은 develop 브랜치에서 진행하며, master 브랜치는 항상 배포 가능한 상태이어야 합니다. master 브랜치로는 직접 커밋하지 않습니다.

만약 Home screen의 기능을 구현하고 싶다면 feature/home-screen 브랜치를 만들고 개발을 진행합니다. 구현이 완료되면 feature/home-screen 브랜치를 develop 브랜치로 merge하고, feature/home-screen 브랜치를 제거합니다.

이러한 git 운영 방식을 git flow라고 부르며, git flow 툴을 설치하면 편리합니다. OSX에서는 `brew install git-flow`를 통해 설치할 수 있습니다. 새로운 기능을 개발하기 위해서는 먼저 `git flow start feature MYFEATURE`을 실행합니다. 

보다 자세한 내용은 [우린 Git-flow를 사용하고 있어요](http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)를 참고해보세요. 툴에 대한 설명은 [여기](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)에서 볼 수 있습니다.

### Run

> [Expo CLI](https://expo.io/tools#cli)를 사용한다고 가정합니다.

expo를 실행해 빌드합니다.

```bash
$ expo start
```

* (virtual machine의 경우) 기기를 실행하고 Expo 어플리케이션에서 univ-plus를 선택한다.
* (실단말의 경우) 기기에 [Expo Client](https://expo.io/tools#client)를 설치하고, 터미널에 띄워진 QR코드를 스캔한다.

코드를 수정하고 저장하면 expo가 알아서 다시 빌드해줍니다.

### Publish

feature 브랜치에서 기능 구현을 마쳤다면 `git flow feature publish MYFEATURE`을 실행합니다. 이렇게 하면 해당 feature branch가 develop으로 merge되고, 해당 브랜치는 삭제됩니다.

## License

=======
# Withsome+

> 이 프로젝트는 [Create React Native App](https://github.com/react-community/create-react-native-app)으로 bootstrap되었습니다.

## Development

### Getting started

#### 1. Clone the repository

repository를 clone해 **local repository**를 만듭니다. 명령 실행 즉시 withsome-plus 디렉토리가 만들어지니 실행 전에 디렉토리가 만들어지길 원하는 위치로 이동해야 합니다.

```bash
$ git clone https://github.com/ajou-pioneer/withsome-plus.git
```

#### 2. Install dependencies

withsome-plus 디렉토리로 이동해 package.json에 명시된 node 패키지를 설치합니다.

```bash
$ cd withsome-plus
$ npm install
```

### Git-flow

개발은 develop 브랜치에서 진행하며, master 브랜치는 항상 배포 가능한 상태이어야 합니다. master 브랜치로는 직접 커밋하지 않습니다.

만약 Home screen의 기능을 구현하고 싶다면 feature-home 브랜치를 만들고 개발을 진행합니다. 구현이 완료되면 feature-home 브랜치를 develop 브랜치로 merge하고, feature-home 브랜치를 제거합니다.

git-flow에 대한 자세한 내용은 [우린 Git-flow를 사용하고 있어요](http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)를 참고해보세요. 또한 [git-flow를 편하게 운용하기 위한 툴](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)도 있습니다.

### Run

> [Expo CLI](https://expo.io/tools#cli)를 사용한다고 가정합니다.

expo를 실행해 빌드합니다.

```bash
$ expo start
```

* (virtual machine의 경우) 기기를 실행하고 Expo 어플리케이션에서 withsome-plus를 선택한다.
* (실단말의 경우) 기기에 [Expo Client](https://expo.io/tools#client)를 설치하고, 터미널에 띄워진 QR코드를 스캔한다.

코드를 수정하고 저장하면 expo가 알아서 다시 빌드해줍니다.

### Publish

feature 브랜치에서 기능 구현을 마쳤다면 develop 브랜치에 pull request를 보내주세요.

![pull request](https://t1.daumcdn.net/cfile/tistory/991D10345AEDBC6D13)

compare를 누르면 merge할 브랜치를 선택할 수 있습니다. 베이스 브랜치는 develop을 유지해주세요.

## License

>>>>>>> feature/home-screen
Copyright © 2018. All Rights Reserved by PIONEER.