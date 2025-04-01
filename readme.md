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

  

  
