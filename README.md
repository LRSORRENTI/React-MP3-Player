# React Music Player

**React-Based Audio Player and Phone Interface**

## Description

**This project is a React-based application that simulates a phone interface with various features, including an audio player, dark mode toggle, and customizable thumbnails. It demonstrates the use of React components, state management, and vanilla CSS for styling.**

### Features

1. Audio Player: A fully functional audio player built with React, capable of playing, pausing, and navigating through tracks.

2. Dark Mode Toggle: An interactive toggle switch to switch between light and dark modes.

3. Phone Simulation: A phone interface showcasing React components and state management, including a class component for phone behavior.

4. Customizable Thumbnails: Dynamic thumbnail borders that react to user interaction.

5. Responsive Design: The application is styled using WholePhone.css for a responsive user interface that adapts to different screen sizes.

6. Comprehensive UI Components: Includes TimeSlider, SongControls, SongDetails, and more, demonstrating a wide range of React functionalities.

## TO-DO LIST: 

### Draggable Time Slider Synchronized with Audio

**Modify Time Slider Component:**

- Implement a draggable UI component for the time slider.

- Integrate the slider with the audio player's current time.

- Ensure the slider position updates as the song progresses.

- Handle User Interaction:

- Add event handlers to update the song's current time when the slider is dragged.

- Ensure smooth dragging behavior and immediate audio response.

**Testing and Validation:**

- Test the slider functionality with different song lengths.

- Check for responsiveness and synchronization accuracy.

**Playlist Functionality**

- Create a data structure to hold multiple song details (e.g., title, artist, duration, file URL).

**Update Audio Player State:**

- Modify the audio player's state to handle a list of songs.
- Implement functionality to play the next song in the list once the current one ends.

**UI for Playlist Management:**

- Develop UI components to display the playlist.

- Allow users to select any song from the playlist to play.

**Testing Playlist Features:**

- Test adding, removing, and selecting songs in the playlist.

- Ensure seamless transition between songs in the playlist.

**Shuffle Functionality**

- Add a shuffle option to the audio player.

- Develop an algorithm to randomly order the songs in the playlist.

- Create a shuffle button/toggle on the user interface.

- Test the shuffle functionality for different playlist sizes.

- Ensure the shuffle order changes each time the shuffle is activated.

**Integrate with Existing Controls:**

- Ensure shuffle works in conjunction with play, pause, next, and previous controls.

- Verify shuffle state persists or resets based on user preference.
