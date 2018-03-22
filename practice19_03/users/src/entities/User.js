class User {
    constructor (user) {
        this.photo = user.picture.medium
        this.fullName =  user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1) + " " + user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);
        this.email = user.email
        this.birthday = new Date(user.dob).toDateString()
        this.gender = user.gender
    }
}

export default User;