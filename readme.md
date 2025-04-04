# File Explorer
  1. Creating sample data array of object
  2. Display using useState
  3. Recurrsion if childern present
  4. Adding new folder
  5. Delete folder and file
  6. Handle empty list case and show add option

# Progress Bar
  1. Create parent child div
  2. Add basic css and inner div dynamic width and green background
  3. Static progress bar will be ready
  4. For Animation Create state var with initial value 0
  5. In useEffect set state var with actual progress value by adding some delay using setTimeout
  6. Add animation using css transition property like 0.5s ease-in
  7. For optimazation use dynamic transform translateX(progress - 100) for smooth effect

# AutoComplete Search Bar
  1. Create input and map its value with state variable
  2. Create state variable for storing the search result
  3. On input change call api in useEffect and update the result
  4. Map result array in jsx and style the container like overflow and max height
  5. Create state variable for show and hide result container
  6. Add onFocus and onBlur event on input to  show and hide result container
  7. Implement debouncing to reduce api calls
  8. Create state variable for caching to prevent api call when user press back space

# Pagination
  1. Fetch the data and display on UI
  2. Calculate number of pages i.e length of products / page size
  3. Create numbers by using [...Array(noofPages).keys()].map and display it
  4. Calculate the start and end for slice method(it will make the copy of an array).
  5. start = currentPage * pageSize
  6. end = start + pageSize
  7. Add Click handler on numbers and set the currentPage value
  8. Add active class on selected page
  9. Add Prev and Next buttons and handle click on them
  10. Add egde cases on next and prev buttons.


# Tab Form and validations
  1. Create All components
  2. In parent component create tabData like {name: Profile, component: Profile}
  3. Create state variable for active tab with initial value 0
  4. Get the active component by using tabData[activeTab].component
  5. Map through tabData and create tabs, it will create tab functionality
  6. Pass ActiveTabComponent to initial json data and setter function as props
  7. Create indiviual form component and map value to json and set State using setter function
  8. Add Submit, next and prev buttons 
  9. For error handling create state variable like {name: 'invalid name'}
  10. Add validate method in tabData and fill error obj and return true or false {name: Profile, component: Profile, validate: () => {}}


# OTP Input Validations
 1. Create state Variable with initial value 'new Array(digitSize).fill('')'
 2. Map inputArr in jsx and add onchange handler
 3. Create ref variable with initial value as []
 4. Map input with ref var like ref={(currentInput) => (inputRefArr.current[index] = currentInput)}
 5. In onchange create new arr and than update the state
 6. After updating state focus on next input by using ref like "newValue && inputRefArr.current[index + 1]?.focus()"
 7. Add onKeyDown event on input pass event and index to handler
 8. In onKeyDown handler check if e.key == "Backspace" and !e.target.value
 9. If condition passes focus on previous input by using ref like inputRefArr.current[index -1]?.focus();
 10. Add useEffect to add focus on 1st input on page component load.
 11. To get last entered input use slice(-1) and also trim the value in onchange handler



  

  
