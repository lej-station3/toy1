### immer 
- 불변성을 유지해 객체의 값을 쉽게 업데이트 해보자 ! 
> npm i immer

```
- 쓰기 전 
  const handleCreate = () => {
     const list= {
       id: nextId.current,
       menu,
       check:false
     };
     setListZip(listZip.concat(list));
  setInput({
    menu:''
   })
     nextId.current += 1;
   };

- 쓰기 후

const handleCreate = e =>{
    e.preventDefault();
    const list = {
        id : nextId.currnet,
        menu:input.menu,
        done:false,
    }

    setListZip(
        produce(listZip,draft => {
            draft.push(list)
        })
    );
    setInput({
        menu:'';
    });
    nextid.currnet +=1;
}

```

### useRef
- 컴포넌트 안에서 변수를 관리해보자 !
- 변수 값이 바뀌어도 컴포넌트 리렌더링 안됨. 설정하고 바로 조회 가능
- useref() 안에 파라미터 넣어주면 .current 기본값 

#### 안됐던 거 모음 
- toggle로 밑줄 그을 때 done 값이 안내려갔다
- 왜냐면 