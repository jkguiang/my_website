from flask import Flask, render_template, flash, request, url_for
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import json

#App initialization
main = Flask(__name__)
main.config.from_object(__name__)
main.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'

@main.route('/')
def home():
    return render_template("home.html")

@main.route('/about')
def about():
    return render_template("about.html")

#START PROGRAMS ---------------------------------------------------------------------------------------------------------------------------
@main.route('/programs')
def programs():
    return render_template("programs.html")

#THE LOST BASTILLE
class ReusableForm(Form):
    usr_inp = TextField('Input: ', validators=[validators.required()])

#Global Variabes
stage_pointer = 0
usr_char = None
img_name = "../static/img/partitions.jpg" #Into -> Title screen animation
cur_descript = "Welcome to the Lost Bastille!"

@main.route('/programs/the_lost_bastille', methods=['GET', 'POST'])
def the_lost_bastille():
    import TLB
    import classes
    global stage_pointer
    global usr_char
    global img_name
    global cur_descript

    form = ReusableForm(request.form)
    TLB_start = False

    if request.method == 'GET':
        TLB_start = True
        print(stage_pointer)
        print(usr_char)
        print(img_name)

    print(form.errors)
    if request.method == 'POST':
        usr_inp = request.form['usr_inp']

        if form.validate():
            #Get stage image, "pointer" to next stage, and user character
            img_name, stage_pointer, usr_char = TLB.TLB_main(stage_pointer, usr_char, usr_inp)

            #Get dialogue options and stage description
            dlg = json.load("dialoge.txt")
            descript = dlg[stage_pointer]["descript"]
            opt1 = dlg[stage_pointer]["opt1"]
            opt2 = dlg[stage_pointer]["opt2"]
            opt3 = dlg[stage_pointer]["opt3"]
            opt4 = dlg[stage_pointer]["opt4"]

            #Fill POST form with information (Only needs to not have ERROR in it)
            flash(usr_inp)
            print(stage_pointer)
            print(usr_char)
            print(img_name)
        else:
            flash('Error: Please enter an action.')

    return render_template("the_lost_bastille.html", form=form, img_name=img_name, TLB_start=TLB_start, descript=descript, opt1=opt1, opt2=opt2, opt3=opt3, opt4=opt4)

#END PROGRAMS ---------------------------------------------------------------------------------------------------------------------------

@main.route('/gallery')
def graph():
    return render_template("gallery.html")

@main.route('/contact')
def contact():
    return render_template("contact.html")

if __name__ == "__main__":
    main.run()
