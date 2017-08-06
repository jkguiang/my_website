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

# Contact Form
contacts = {} # dictionary to be exported to a database or other secure storage location for later access

class ContactForm(Form):
    name = TextField('name', validators=[validators.Required(message=u'This field is required'), validators.Length(min=2, max=25)])
    email = TextField('email', validators=[validators.Required(message=u'This field is required'), validators.Length(min=3, max=35), validators.Email()])
    text = TextAreaField('text')

@main.route('/contact', methods=['GET', 'POST'])
def contact():
    contact = ContactForm(request.form)
    
    if request.method == 'GET':
        name = "" #Need this to fill page on loading, since we call name in render_template

    print(contact.errors)
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        text = request.form['text']

        print(contact.validate())
        print(contact.errors)
        if contact.validate():
            #Fill POST form with information (Only needs to not have ERROR in it)
            contacts[contact.name.data] = (contact.email.data, contact.text.data)
            print(contacts) #Replace this print statement with some function that takes name, email, and text and dumps them somewhere accessible
            flash(name)
        else:
            flash('Error: form incomplete', 'Error')

    return render_template("contact.html", form=contact, name=name)

if __name__ == "__main__":
    main.run()
