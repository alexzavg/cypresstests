var faker = require('faker');
var strftime = require('strftime');

/**
 * Common helper object.
 * @constructor
 */
let CommonHelper = function() {

    /**
     * convert date to format dd.mm.yyy, hh:mm
     * @param convertDate
     * @param UTC
     */
    this.convertDateToCRM2 = function (convertDate, UTC) {
        var date = new Date(convertDate);
        var strftimeUTC = strftime.timezone(UTC);
        date.setDate(date.getDate());
        return strftimeUTC('%d.%m.%Y, %H:%M', date);
    };

    /**
     * Generates random user nickname, e.g Kirstin39
     *
     */
    this.uniqueUserName = function () {
        return faker.internet.userName().replace('\'', '');
    };

    /**
     * Generates random domain words
     *
     */
    this.uniqueDomainWord = function () {
        return faker.internet.domainWord();
    };

    /**
     * Generates random last name, e.g Roob
     *
     */
    this.uniqueLastName = function () {
        return faker.name.lastName().replace('\'', '');
    };

    /**
     * Generates random first name, e.g Bob
     *
     */
    this.uniqueFirstName = function () {
        return faker.name.firstName().replace('\'', '');
    };

    /**
     * Generates random phone number with next format - +79787587353
     *
     */
    this.uniquePhoneNumber = function () {
        return '+79' + faker.random.number({min:100000000, max:999999999});
    };

    /**
     * Generates random phone number for Turkey, format - +905321112233
     *
     */
    this.uniqueTurkeyPhoneNumber = function () {
        return '+90532' + faker.random.number({min:1000000, max:9999999});
    };

    /**
     * Generates random phone number with next format - +380991234567
     *
     */
    this.uniquePhoneNumberUa = function () {
        return '+38099' + faker.random.number({min:1000000, max:9999999});
    };

    /**
     * Generates random number - 42
     *
     */
    this.uniqueNumber = function () {
        return faker.random.number({min:1, max:99999999});
    };

    /**
     * Generates random number with given length, e.g 111112222255555
     *
     */
    this.getRandomNumberLength = function(length) {
        var string = '';
        var i;
        var numbers = '123456789';
        for (i = 0; i < length; i++) {
            string += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return string;
    };

    /**
     * Generates random phone number with next format - +34600303601
     *
     */
    this.uniquePhoneNumberEs = function () {
        return '600' + faker.random.number({min:100000, max:999999});
    };

    /**
     * Generates random phone number with next format - +79999999999
     *
     */
    this.uniquePhoneNumberEu = function () {
        return '999' + faker.random.number({min:1000000, max:9999999});
    };

    /**
     * Generates Germany random phone number with next format - +491999999999
     *
     */
    this.uniquePhoneNumberDe = function () {
        return '30' + faker.random.number({min:10000000, max:99999999});
    };

    /**
     * Generates random set of charts with given length, e.g. b, hb
     * @param length
     * @returns {*}
     */
    this.getRandomCharLength = function(length) {
        var char = '';
        var i;
        var numbers = 'abcdefghijklmnopqrstuvwxyz';
        for (i = 0; i < length; i++) {
            char += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }
        return char;
    };

    /**
     * Get current day of month
     *
     */
    this.getTodaysDay = function () {
        var date = new Date();
        var day = date.getDate();
        return day;
    };

    /**
     * Get specific day of month
     */
    this.getSpecificDay = function (number) {
        var date = new Date();
        var day = date.getDate() + number;
        return day;
    };

    /**
     * Get specific day of month from 1 to 31
     */
    this.getSpecificMonthDateUTC = function (days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%e', specificDate);
    };

    /**
     * Get current date in format YYYY-MM-DD
     */
    this.getTodaysDate = function () {
        var date = new Date();
        var todaysDate = date.toISOString();
        return todaysDate.slice(0, 10);
    };

    /**
     * Get specific date in format YYYY-MM-DD
     */
    this.getSpecificDate = function (number) {
        var date = new Date(new Date().setDate(new Date().getDate()+number));
        var newDate = date.toISOString();
        return newDate.slice(0, 10);
    };

    /**
     * Get specific date with UTC in format yyyy-mm-dd
     */
    this.getSpecificDateTeacherUTC = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%Y-%m-%d', specificDate);
    };

    /**
     * Get lesson specific date in format yyyy-mm-ddT
     */
    this.getLessonSpecificDate = function (days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%Y-%m-%d', specificDate) + 'T';
    };

    /**
     * Get specific weekday from 1 to 7
     */
    this.getSpecificWeekday = function (number, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var date = new Date();
        date.setDate(date.getDate() + number);
        return strftimeUTC('%u', date);
    };

    /**
     * Get today's full weekday
     */
    this.getTodaysFullWeekday = function (UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var date = new Date();
        date.setDate(date.getDate());
        return strftimeUTC('%A', date);
    };

    /**
     * Get specific hour from 00 to 23
     */
    this.getSpecificHourDoubleDigit = function (number, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var date = new Date();
        date.setHours(date.getHours() + number);
        return strftimeUTC('%H', date);
    };

    /**
     * Get specific hour with local UTC from 0 to 23
     */
    this.getSpecificHour = function (number, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var date = new Date();
        date.setHours(date.getHours() + number);
        return strftimeUTC('%k', date).replace(' ', '');
    };

    /**
     * Get current date in CRM status format DD.MM.YYYY
     */
    this.getTodaysDateCrmStatusFormat = function (UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate());
        return strftimeUTC('%d.%m.%Y', specificDate);
    };

    /**
     * Get specific date in CRM status format DD.MM.YYYY
     */
    this.getSpecificDateCrmStatusFormat = function (days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%d.%m.%Y', specificDate);
    };

    /**
     * Get current date in format mm/dd/yyyy
     *
     */
    this.getSpecificDateUTC = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%m/%d/%Y', specificDate);
    };

    /**
     * Get current date of month without padding, e.g. 1, 2, 3
     *
     */
    this.getSpecificDayUTC = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%e', specificDate);
    };

    /**
     * Get specific date in format mmddyyyy
     */
    this.getSpecificDateTeacherVacation = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%m%d%Y', specificDate);
    };

    /**
     * Get specific date for TRM vacation in format dd/mm/yyyy
     */
    this.getSpecificDateTRMvacation = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%d/%m/%Y', specificDate);
    };

    /**
     * Get specific date for TT vacation in format mm/dd/yyyy without zeroes at the beginning
     */
    this.getSpecificDateTTvacation = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%-m/%-d/%Y', specificDate);
    };

    /**
     * Get today's or specific date in format dd-mm-yyyy hh:mm:ss
     *
     */
    this.getCurrentDateUTC = function(UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        return strftimeUTC('%d-%m-%Y %H:%M:%S');
    };

    /**
     * Get today's or specific date's day in range 01-31
     *
     */
    this.getSpecificDayDoubleDigitUTC = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%d', specificDate);
    };

    /**
     * Get today's or specific date's month in range 1-12
     *
     */
    this.getSpecificMonthUTC = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%-m', specificDate);
    };

    /**
     * Get today's or specific date's year in format YYYY
     *
     */
    this.getSpecificYearUTC = function(days, UTC) {
        var strftimeUTC = strftime.timezone(UTC);
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + days);
        return strftimeUTC('%Y', specificDate);
    };

    /**
     * Get user birthday with specific year in format yyyy-mm-dd
     *
     */
    this.generateUserBirthday = function (years) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear() - years;
        if(dd < 10){
            dd = '0' + dd;
        }
        if(mm < 10){
            mm = '0' + mm;
        }
        var today = yyyy + '-' + mm + '-' + dd;
        return today;
    };

    /**
     * Get month in word format
     */
    this.getMonthWord = function(month) {
        var monthWord;
        if(month === '01') {
            monthWord = 'января'
        } else if(month === '02') {
            monthWord = 'февраля'
        } else if(month === '03') {
            monthWord = 'марта'
        } else if(month === '04') {
            monthWord = 'апреля'
        } else if(month ==='05') {
            monthWord = 'мая'
        } else if(month === '06') {
            monthWord = 'июня'
        } else if(month === '07') {
            monthWord = 'июля'
        } else if(month === '08') {
            monthWord = 'августа'
        } else if(month === '09') {
            monthWord = 'сентября'
        } else if(month === '10') {
            monthWord = 'октября'
        } else if(month === '11') {
            monthWord = 'ноября'
        } else if(month === '12') {
            monthWord = 'декабря'
        }
        return monthWord;
    };

    /**
     * Get specific date in format "dd {month} year"
     */
    this.getSpecificDateWithMonthWord = function (day) {
        var specificDate = new Date();
        specificDate.setDate(specificDate.getDate() + day);
        var dd = specificDate.getDate();
        var mm = specificDate.getMonth() + 1;
        if(mm < 10){
            mm = '0' + mm;
        }
        var month = this.getMonthWord(mm.toString());
        var yyyy = specificDate.getFullYear();
        var date = dd + ' ' + month + ' ' + yyyy;
        return date;
    };

    /**
     * Get current time in format hh.mm.ss
     */
    this.getCurrentTime = function () {
        var date = new Date,
            time = date.toISOString().slice(-13, -5);
        return time;
    };

    /**
     * Get current time in 2019-02-12T15:24:15.731Z
     */
    this.getCurrentTimeImap = function () {
        var date = new Date();
        date.setTime(Date.now());
        var time = date.toISOString();
        console.log(time);
        return time;
    };

    /**
     * For add a string into another string
     *
     */
    String.prototype.splice = function(idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };

    /**
     * Start cron on test env
     */
    this.startCustomCron = function (link, cronName){
        const {spawn} = require('child_process');
        const ls = spawn(
            "ssh", [
                "www-data@"+link.substr(8),
                cronName
            ]);
        ls.stdout.on('data', (data) => {console.log(`${data}`);});
        ls.stderr.on('data', (data) => {console.log(`${data}`);});
        ls.on('close', (code) => {console.log(`child process exited with code ${code}`);});
        browser.sleep(5000);
    };

    /**
     * Decodes a quoted-printable encoded string.
     * Returns null if there was an error.
     *
     * https://en.wikipedia.org/wiki/Quoted-printable
     *
     * @param {string} data The quoted - printable encoded data.
     * @returns {string} The decoded string or null if there was an error.
     */
    this.decodeQuotedPrintable = function (data) {
        // ensure that data is a string
        if (!(typeof data === 'string' || data instanceof String)) {
            return null;
        }
        var replacer = function (match, p1) {
            // handle escape sequence
            if (p1.trim().length === 2) {
                // decode byte (for example: "=20" ends up as " ")
                var code = parseInt(p1.trim(), 16);
                return String.fromCharCode(code);
            }
            // handle soft line breaks
            return '';
        };
        // remove soft line breaks and convert escape sequences
        data = data.replace(/=([0-9A-F]{2}|\r\n|\n)/gi, replacer);
        // decode escape sequences
        try {
            return decodeURIComponent(escape(data));
        } catch (dummy) {
            return null;
        }
    };

    this.getDataFromCookie = async (cookie, cookieProperty) => {
        let dataArray = await cookie.split(';');
        for(let i = 0; i < dataArray.length; i++) {
            if (dataArray[i].includes(cookieProperty)) {
                return dataArray[i].split('=')[1];
            }
        }
    };

    this.getCurrentDateAndTime = function () {
        let dateObject = new Date();
        return (
            dateObject.getFullYear() +
            '-' +
            (dateObject.getMonth() + 1) +
            '-' +
            dateObject.getDate() +
            ' ' +
            (dateObject.getHours() - 3) +
            ':' +
            dateObject.getMinutes() +
            ':' +
            dateObject.getSeconds()
        );
    };
};

module.exports = new CommonHelper();
