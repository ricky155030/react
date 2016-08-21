#!/bin/zsh

SESSION_NAME=react-practice
WINDOW1=gulp_express
WINDOW2=actions_container
WINDOW3=reducers
WINDOW4=components

echo "Creating tmux session: $SESSION_NAME"

tmux new-session -s $SESSION_NAME -n $WINDOW1 -d \; split-window
tmux new-window -t $SESSION_NAME -n $WINDOW2
tmux new-window -t $SESSION_NAME -n $WINDOW3
tmux new-window -t $SESSION_NAME -n $WINDOW4

tmux send-keys -t $WINDOW1.0 'gulp' Enter
tmux send-keys -t $WINDOW1.1 'node server' Enter
tmux send-keys -t $WINDOW2 'vim app/js/actions/* app/js/index.js app/js/containers/*' Enter
tmux send-keys -t $WINDOW3 'vim app/js/reducers/*' Enter
tmux send-keys -t $WINDOW4 'vim app/js/components/*' Enter

echo "Tmux session: $SESSION_NAME created!"
