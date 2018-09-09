# Withsome+

> 이 프로젝트는 [Create React Native App](https://github.com/react-community/create-react-native-app)으로 bootstrap되었습니다.

## Development

### Getting started

#### 1. Fork the repository

우측 상단 Fork 버튼을 눌러 저장소를 복사합니다. 이렇게 fork된 저장소를 **origin remote repository**라고 부릅니다. [원본 저장소](https://github.com/ajou-pioneer/withsome-plus)는 **upstream remote repository**라고 합니다.

#### 2. Clone the repository

자신의 origin remote repository를 clone해 **local repository**를 만듭니다. 명령 실행 즉시 withsome-plus 디렉토리가 만들어지니 실행 전에 디렉토리가 만들어지길 원하는 위치로 이동해야 합니다.

```bash
$ git clone https://github.com/{USER}/withsome-plus.git
```

> `{USER}` 부분에 자신의 깃허브 아이디를 넣어주세요.

#### 3. Install dependencies

withsome-plus 디렉토리로 이동해 package.json에 명시된 node 패키지를 설치합니다.

```bash
$ cd withsome-plus
$ npm install
```

#### 4. Add upstream

local repository를 upstream repository와 동기화하기 위해 로컬에 원격 저장소를 추가해줍니다.

```bash
$ git remote add upstream https://github.com/ajou-pioneer/withsome-plus.git
```

upstream의 내용을 가지고 오고 싶을 때는 다음 명령을 실행합니다:

```bash
$ git fetch upstream
$ git checkout develop
$ git merge upstream/develop
```

> 개발은 develop 브랜치에서 진행하며, master 브랜치는 항상 배포 가능한 상태이어야 합니다. master 브랜치로는 직접 커밋하지 않습니다.

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

기능 구현을 마쳤다면 [upstream repo](https://github.com/ajou-pioneer/withsome-plus)에 pull request를 보내주세요.

![pull request](https://t1.daumcdn.net/cfile/tistory/991D10345AEDBC6D13)

'compare across forks'를 누르면 origin repo를 upstream repo에 머지하도록 요청할 수 있습니다. 브랜치는 develop을 유지해주세요.

## License

Copyright © 2018. All Rights Reserved by PIONEER.