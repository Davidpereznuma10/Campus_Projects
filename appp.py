import pyautogui as py
import time

py.hotkey('ctrl', 'backspace')

time.sleep(.2)

py.typewrite("cd..\n", interval=.2)

time.sleep(.2)

py.typewrite("mkdir hello-world\n", interval=.2)

time.sleep(.2)

py.typewrite("cd hello-world\n", interval=.2)

time.sleep(.2)

py.typewrite('echo > App.py\n', interval=.2)

time.sleep(.2)

py.hotkey('ctrl', 'c')

time.sleep(.2)

py.typewrite('cd..\n')

time.sleep(.2)

py.typewrite('rar a -r -rr "helloWorld2.rar" "hello-world"\n')

time.sleep(.2)

py.typewrite('start chrome https://mail.google.com/mail/u/0/?tab=rm"&"ogbl#inbox\n')



# py.typewrite('COPY CON app.py\n', interval=.3)

# time.sleep(.2)

# py.typewrite('nombre="Dayismar Roseiguez"\nskills="pensamiento logico, aprendizaje rapido, habilidad matematica,velocidad de redaccion"\nexperienciaEnProgramacion="empece con un curso de Google acerca de HTML y CSS basico, luego profundice con videos en youtube, ahi tambien aprendi a usar GIT, GitHub y Bootstrap, y actualmento estoy aprendiendo a usar javascript de la misma forma, tambien me ayude con foros y documentacion oficial"\nedad="18"', interval=.1)

# time.sleep(.2)

# 

# time.sleep(.2)

# py.typewrite('copy app.py\n', interval=.5)

