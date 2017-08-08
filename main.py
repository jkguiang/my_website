from flask import Flask, render_template, flash, request, url_for
from wtforms import Form, TextField, TextAreaField, validators, StringField, SubmitField
import json

#App initialization
main = Flask(__name__)
main.config.from_object(__name__)
main.config.from_pyfile('settings.py')
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

@main.route('/programs/autoplotter')
def autoplotter():
    return render_template("autoplotter.html")

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
    left_col = ['cabo_rocks', 'plane_wing_air', 'cabo_cliff', 'plane_wing_ground', 'beach_clouds', 'campus_point_cliffs']
    right_col = ['venice', 'colleseum' , 'cathedral', 'mnts_from_train', 'beach_1', 'beach_rock_shore']
    return render_template("photography.html", left_col=left_col, right_col=right_col)

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
     main.debug = True
     port = int(os.environ.get("PORT", 5000))
     main.run(host='0.0.0.0', port=port)
