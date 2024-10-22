def letter_combinations(digits: str):
    # Return an empty list if the input string is empty
    if not digits:
        return []
    
    # Mapping of digits to corresponding letters on a phone keypad
    phone_map = {
        '2': 'abc',  # Digit '2' maps to 'a', 'b', 'c'
        '3': 'def',  # Digit '3' maps to 'd', 'e', 'f'
        '4': 'ghi',  # Digit '4' maps to 'g', 'h', 'i'
        '5': 'jkl',  # Digit '5' maps to 'j', 'k', 'l'
        '6': 'mno',  # Digit '6' maps to 'm', 'n', 'o'
        '7': 'pqrs', # Digit '7' maps to 'p', 'q', 'r', 's'
        '8': 'tuv',  # Digit '8' maps to 't', 'u', 'v'
        '9': 'wxyz'  # Digit '9' maps to 'w', 'x', 'y', 'z'
    }
    
    # List to store the resulting combinations
    result = []
    
    # Helper function to perform backtracking
    def backTrack(index, path):
        # If the current path length equals the digits length, a valid combination is formed
        if index == len(digits):
            result.append(path)  # Add the current combination to the result list
            return
        
        # Get the letters corresponding to the current digit
        letters = phone_map[digits[index]]
        
        # Iterate over each letter and continue building the combination
        for letter in letters:
            backTrack(index + 1, path + letter)  # Recursive call to build the next level of the combination
            
    # Start the backtracking process with an empty path
    backTrack(0, '')
    
    # Return the list of all possible combinations
    return result