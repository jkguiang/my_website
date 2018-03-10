#Flask
from flask import Flask, render_template, flash, request, url_for
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
from flask_mail import Message, Mail

#Other imports
import json
import os
import random

#App initialization
mail = Mail()

main = Flask(__name__)

main.config.from_object(__name__)
main.config['SECRET_KEY'] = '7d441f27d441f27567d441f2b6176a'
main.config["MAIL_SERVER"] = "smtp.gmail.com"
main.config["MAIL_PORT"] = 465
main.config["MAIL_USE_SSL"] = True
main.config["MAIL_USERNAME"] = 'jguiangwebsite@gmail.com'
main.config["MAIL_PASSWORD"] = 'jonathanguiang_website'

mail.init_app(main)

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

@main.route('/programs/autoplotter')
def autoplotter():
    return render_template("autoplotter.html")

@main.route('/programs/autodqm')
def autodqm():
    return render_template("autodqm.html")

@main.route('/programs/projectmetis')
def projectmetis():
    return render_template("projectmetis.html")

@main.route('/programs/projectmetis/features')
def projectmetis_web():
    return render_template("projectmetis_web.html")
#END PROGRAMS ---------------------------------------------------------------------------------------------------------------------------

@main.route('/gallery')
def graph():
    return render_template("gallery.html")

@main.route('/gallery/designs')
def designs():
    return render_template("designs.html")

@main.route('/gallery/photography')
def photography():
    left_col = {'cabo_rocks':'Cabo, Mexico', 'plane_wing_air':'Cabo, Mexico', 'cabo_cliff':'Cabo, Mexico', 'plane_wing_ground':'Cabo, Mexico', 'beach_clouds':'Isla Vista, CA', 'campus_point_cliffs':'Isla Vista, CA'}
    right_col = {'venice':'Venice, Italy', 'colleseum':'Rome, Italy', 'cathedral':'St. Peter\'s Basilica, Vatican City', 'mnts_from_train':'Unknown, CA', 'beach_1':'Isla Vista, CA', 'beach_rock_shore':'Isla Vista, CA'}
    return render_template("photography.html", left_col=left_col, right_col=right_col)

# Contact Form
contacts = {} # dictionary to be exported to a database or other secure storage location for later access

class ContactForm(Form):
    name = TextField('name', validators=[validators.Required(message=u'This field is required'), validators.Length(min=2, max=25)])
    email = TextField('email', validators=[validators.Required(message=u'This field is required'), validators.Length(min=3, max=35), validators.Email()])
    text = TextAreaField('text')
    robot_check = TextAreaField('robot_check', validators=[validators.Required(message=u'This field is required')])

#Global variables to hold robot check question for individual user instance
question = None
answer = None


# Randomly generates robot check question
def get_check():
    questions = ["What is my first name?", "What is my last name?",
                 "What is the first letter of my first name?", "What is the first letter of my last name?",
                 "How many letters are in my first name?", "How many letters are in my last name?"]
    answers = ["jonathan", "guiang", "j", "g", "8", "6"]
    selection = random.randint(0,(len(answers) - 1))

    return questions[selection], answers[selection]


@main.route('/contact', methods=['GET', 'POST'])
def contact():
    # Declate contact object
    contact = ContactForm(request.form)

    # Retrieve global values
    global question
    global answer

    # Local variables for robot check
    user_answer = ""
    check_pass = False

    if request.method == 'GET':
        # Generate new question, answer if all NoneType
        if (question, answer) == (None, None):
            question, answer = get_check()
        name = "" #Need this to load page, since we call name in render_template

    print(contact.errors)
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        text = request.form['text']
        user_answer = request.form['robot_check']

        if user_answer.lower() == answer:
            check_pass = True

        print(contact.validate())
        print(contact.errors)
        if contact.validate() and check_pass:
            # Reset quesion, answer, selection on successful POST
            question, answer = get_check()

            #Send info to my email
            msg = Message('New contact from website', sender='jguiangwebsite@gmail.com', recipients=['jkguiang@gmail.com'])
            msg.body = """
            From: %s <%s>
            %s
            """ % (contact.name.data, contact.email.data, contact.text.data)
            mail.send(msg)

            #Fill POST form with information (Only needs to not have ERROR in it)
            flash(name)
        else:
            if check_pass:
                flash('form incomplete', 'Error')
            else:
                flash('incorrect answer', 'Error')

    return render_template("contact.html", form=contact, name=name, question=question, answer=answer)

if __name__ == "__main__":
     main.debug = True
     port = int(os.environ.get("PORT", 5000))
     main.run(host='0.0.0.0', port=port)
