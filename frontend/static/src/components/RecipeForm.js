// function RecipeForm() {

//     return (
//         <div className='loginPlacholder'>
//         <p>New Recipe</p>
//         <form onSubmit={handleSubmit}>
//             <div className='col loginField'>
//                 <input className='inputField' type='text' name='title' placeholder='title' onChange={handleTitleInput} value={title}></input>
//             </div>
//             <div classname='col loginField'>
//                 <input className='inputField' type='text' name='summary' placeholder='summary' onChange={handleSummaryInput} value={summary}></input>
//             </div>
//             <div className='col loginField'>
//                 <input className='inputField' type='text' name='text' placeholder='text' onChange={handleTextInput} value={text}></input>
//             </div>
//             <div className='col loginField'>
//                 <input  className='inputField'type='file' name='articleImage' onChange={handleImage} />
//                 {preview && <img src={preview} alt='' />}
//             </div>
//             <button className='loginRegisterButton create' type='submit' onClick={()=> setPhase('DRT')}>Save</button>
//             <button className='loginRegisterButton create' type='submit' onClick={()=> setPhase('SUB')}>Save/Submit</button>
//         </form>
//     </div>
//     )

// }

// export default RecipeForm