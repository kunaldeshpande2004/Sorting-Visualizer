import React, {  useState } from 'react'
import { message } from 'antd';
export default function Visualizer() {
    const [array,setArray]=useState([]);
    const [time,setTime]=useState('-')
    const [size,setSize]=useState(300);
    const [color,setColor]=useState([]);
    const [sorting,setSorting]=useState(false);
    const [algo,setAlgo]=useState('');
  const [sorted,setSorted]=useState(false);
  const [speed,setSpeed]=useState(0);

    const createArray=()=>{
        setSorted(false)
        setTime('-')
        let arr=[];
        let colorArr=[];
        for(let i=2;i<size;i+=3){
            let num=Math.random()*(size-5)+5;
         arr.push(num);
         colorArr.push('red');
        }
        setArray(arr);
        setColor(colorArr);
  }
   
    const resetColor=()=>{
        setColor(new Array(array.length).fill('red'));
    }

   async function quickSort(arr, start = 0, end = arr.length - 1,startTime=null) {
    if (start >= end) {
        return;
    }
    if(!startTime)
    startTime=new Date();
    setSorting(true);
    let pivotIndex = await partition(arr, start, end);
    await Promise.all([
        quickSort(arr, start, pivotIndex - 1),
        quickSort(arr, pivotIndex + 1, end)
    ]);

    if (start === 0 && end === arr.length - 1) {
        setSorting(false);
        setSorted(true);
        let endTime =new Date();
      setTime(endTime-startTime)
        resetColor();
    }
}

async function partition(arr, start, end) {
    let pivot = arr[end];
    let i = start;
   let colorArr=[...color]
    for (let j = start; j < end; j++) {
       
        if(speed>=0)
            await new Promise(resolve => setTimeout(resolve, speed));

        if (arr[j] < pivot) {
          colorArr[j]='blue';
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            setArray([...arr]);
            setColor([...colorArr])
            if(speed>=0)
                await new Promise(resolve => setTimeout(resolve, speed));
        }
    }
    [arr[i], arr[end]] = [arr[end], arr[i]];
    setArray([...arr]);

    resetColor(); 
    return i;
}

async function mergeSort(arr, start = 0, end = arr.length - 1,startTime=null) {
    if (start >= end) {
        return;
    }
    if(!startTime){
     startTime=new Date();
    }
    const mid = Math.floor((start + end) / 2);
    await Promise.all([
        mergeSort(arr, start, mid),
        mergeSort(arr, mid + 1, end)
    ]);

    await merge(arr, start, mid, end);

    if (start === 0 && end === arr.length - 1) {
        setSorting(false);
        setSorted(true);
        let endTime =new Date();
       setTime(endTime-startTime)
        resetColor();
    }
}

async function merge(arr, start, mid, end) {
    let left = arr.slice(start, mid + 1);
    let right = arr.slice(mid + 1, end + 1);
    let colorArr=[...color];
    let i = start;
    let j = 0, k = 0;
    
    setSorting(true);
    while (j < left.length && k < right.length) {
      colorArr[k]='blue';
        if(speed>=0)
            await new Promise(resolve => setTimeout(resolve, speed));
        if (left[j] <= right[k]) {
            arr[i++] = left[j++];
        } else {
            arr[i++] = right[k++];
        }
        setArray([...arr]);
        setColor([...colorArr]);
        if(speed>=0)
            await new Promise(resolve => setTimeout(resolve, speed));
    }

    while (j < left.length) {
        arr[i++] = left[j++];
        setArray([...arr]);
        if(speed>=0)
            await new Promise(resolve => setTimeout(resolve, speed));
    }

    while (k < right.length) {
        arr[i++] = right[k++];
        setArray([...arr]);
        if(speed>=0)
            await new Promise(resolve => setTimeout(resolve, speed));
    }
    resetColor(); 
}


   const bubbleSort=async(nums)=>{
    setSorting(true);
    let startTime =new Date();
    let colorArr=[...color];
    for(let i=1;i<nums.length;i++){
        for(let j=0;j<nums.length-i;j++){
            if(nums[j]>nums[j+1]){
              colorArr[i]='blue';
                let temp=nums[j];
                nums[j]=nums[j+1];
                nums[j+1]=temp;
                setArray([...nums]);
                setColor([...colorArr])
            }
            if(speed>=0)
                await new Promise(resolve => setTimeout(resolve, speed));
       
        }
   
    }
 
   if(speed>=0)
    await new Promise(resolve => setTimeout(resolve, speed));
   resetColor();
    setSorting(false);
    setSorted(true)
    let endTime =new Date();
    setTime(endTime-startTime)
   }

   const shellSort=async(nums)=>{
    setSorting(true);
    let startTime=new Date()
    let colorArr=[...color];
    let h=1;
    while(h<Math.floor(nums.length/3)){
        h=3*h+1
    }
    while(h>=1){
        for(let i=h;i<nums.length;i++){
          
            for(let j=i;j>=h && nums[j]<nums[j-h];j-=h){
                colorArr[j]='blue';
                let temp=nums[j];
                nums[j]=nums[j-h];
                nums[j-h]=temp;
                setArray([...nums]);
                setColor([...colorArr])
            }
            if(speed>=0)
                await new Promise(resolve => setTimeout(resolve, speed));
        
        }
        h=Math.floor(h/3);
    
    }

   if(speed>=0)
    await new Promise(resolve => setTimeout(resolve, speed));
   resetColor();
    setSorting(false);
    setSorted(true)
    let endTime =new Date();
    setTime(endTime-startTime)
   }


   const selectionSort=async(nums)=>{
    setSorting(true);
    let startTime=new Date()
    let colorArr=[...color];
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
          
            setColor([...colorArr])
            if(nums[j]<nums[i]){
            
              colorArr[i]='blue';
            
                let temp=nums[j];
                nums[j]=nums[i];
                nums[i]=temp;
             
                setColor([...colorArr])
                setArray([...nums]);
               
            }
            if(speed>=0)
                await new Promise(resolve => setTimeout(resolve, speed));

        }
    }

   if(speed>=0)
    await new Promise(resolve => setTimeout(resolve, speed));
   resetColor();
    setSorting(false);
    setSorted(true)
    let endTime =new Date();
    setTime(endTime-startTime)
   }

   const insertionSort=async(nums)=>{
      setSorting(true);
      let startTime=new Date()
    let colorArr=[...color];
    for(let i=0;i<nums.length;i++){
        for(let j=i;j>0;j--){
          
            if(nums[j]<nums[j-1]){
              colorArr[j-1]='blue';
                let temp=nums[j];
                nums[j]=nums[j-1];
                nums[j-1]=temp;
                setColor([...colorArr])
                setArray([...nums]);
            }
            if(speed>=0)
           await new Promise(resolve => setTimeout(resolve, speed));
        
        }
     
    }

 if(speed>=0)
    await new Promise(resolve => setTimeout(resolve, speed));
   resetColor();
    setSorting(false);
    setSorted(true)
    let endTime =new Date();
    setTime(endTime-startTime)
   }
   const  sortingAlgo={
    selectionSort,insertionSort,bubbleSort,shellSort,quickSort,mergeSort,
  };
  return (
    <div style={{display:"flex",flexDirection:'column',alignItems:'center',overflowX:'hidden'}}>
        <nav style={{backgroundColor:"yellowgreen" ,width:'100%' ,display:'flex',justifyContent:'space-evenly',padding:'2px',alignItems:'center'}}> 
            <h2>Sorting Visualizer</h2> 
            <select onChange={(e)=>setAlgo(e.target.value)} style={{width:'15%',height:'90%',padding:'5px',outline:'none',border:'none'}}> 
            <option value="" selected disabled>Select a sorting Algorithm</option>
            <option value={'mergeSort'}>Merger Sort</option>
            <option value={'quickSort'}>Quick Sort</option>
            <option value={'insertionSort'}>Insertion Sort</option>
            <option value={'shellSort'}>Shell  Sort</option>
            <option value={'selectionSort'}>Selection  Sort</option>
            <option value={'bubbleSort'}>Bubble  Sort</option>
            </select>

            <select  onChange={(e)=> setSize(Number(e.target.value))} style={{width:'15%',height:'90%',padding:'5px',outline:'none',border:'none'}} >
                <option value="" selected disabled>Set Size of Array</option>
                <option value="25">&lt;25</option>
                <option value="50">&lt;50</option>
                <option value="80">&lt;80</option>
                <option value="100">&lt;100</option>
                <option value="150">&lt;150</option>
                <option value="250">&lt;250</option>
                <option value="300">&lt;300</option>
                <option value="380">&lt;380</option>
                <option value="500">&lt;500</option>
                <option value="800">&lt;800</option>
                <option value="1000">&lt;1000</option>
            </select>

            <select  onChange={(e)=>setSpeed(Number(e.target.value))} style={{width:'15%',height:'90%',padding:'5px',outline:'none',border:'none'}} >
                <option value="" selected disabled>Select Sorting Speed</option>
                <option value="-1">Instant</option>
                <option value="0"> Very Fast</option>
                <option value="5">Fast</option>
                <option value="20">Medium</option>
                <option value="80">Slow</option>
                <option value="120">Very Slow</option>
            </select>
           
        </nav>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'center', margin:'2%',overflowX:'auto',width:'100%'}}>
        {
            array.map((num,i)=>{
                return (
                <div style={{ width:'60px', minWidth: '1px',margin:'1.32px',height:`${num}px`, backgroundColor:color[i]}} key={i}>
                </div>)
            })
        }
        </div>
        <div style={{display:'flex', justifyContent:'space-evenly',width:'100%',marginBottom:'50px'}} >
        <button  disabled={sorting} onClick={()=>{createArray()}} style={{width:'20%',padding:'1.5%',borderRadius:'5px', cursor:'pointer',outline:'none',border:'none',backgroundColor:'greenyellow'}}>Generate a new random array</button>
        <h3>Time Taken By algorithm to complete : {time} ms</h3>
        <button onClick={()=>{
            if(array.length===0)
          message.error('generate an array first')
        else if(!algo)
            message.error("please select a sorting algorithm ")   
         else if(sorted)
         message.error('Array is already sorted')
        else 
        sortingAlgo[algo](array);}}  style={{width:'20%',padding:'1.5%',borderRadius:'5px', outline:'none',cursor:'pointer',border:'none',backgroundColor:'greenyellow'}} disabled={sorting}>Start Sorting</button>
        </div>
        
    </div>
  )
}
