from selenium import webdriver
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support.wait import WebDriverWait

browser = webdriver.Chrome("C:/Users/alec_/Downloads/chromedriver_win32/chromedriver.exe")

def searchCourse():
    print("Hello from a function")
    # browser.get("https://central.carleton.ca/prod/bwysched.p_select_term_s?wsea_code=INT")
    browser.get("https://cufed.carleton.ca/adfs/ls/?wa=wsignin1.0&wtrealm=urn:cas:cas5prod")
    name = browser.find_element_by_id('userNameInput')
    passw = browser.find_element_by_id('passwordInput')
    login = browser.find_element_by_id('submitButton')
    stayin = browser.find_element_by_id('kmsiInput')
    name.send_keys('alecjeffery')
    passw.send_keys('VFR44rfv')
    stayin.click()
    login.click()
    browser.get("https://central.carleton.ca")

    el = WebDriverWait(browser, timeout=3).until(browser.find_element_by_link_text('Registration'))
    # assert el.text == "Hello from JavaScript!"

    # studentServs = browser.find_element_by_link_text('Registration')
    # studentServs.click()
    el.click()
    registration = browser.find_element_by_link_text('Registration') 
    registration.click()
    timetable = browser.find_element_by_link_text('STEP 3: Build Your Timetable/Registration')
    timetable.click()
    term = Select(browser.find_element_by_id('term_code'))
    term.select_by_index(1)

    

    try:
        trysearch = browser.find_element_by_xpath("//input[@name='search_selected']")
        trysearch.click()
    except:
        trysearch = browser.find_element_by_xpath("//input[@name='search_selected']")
        trysearch.click()
            # catch(org.openqa.selenium.StaleElementReferenceException ex)


    # goalready.click()
    # browser.find_element_by_name('search_selected').click()
    browser.find_element_by_id('crn_id').send_keys('30913')
    # browser.find_element_by_('Search').click()
        #id = term_code, value = Proceed to Search
    test = browser.find_element_by_xpath("//input[@title='Search for courses based on my criteria']")
    test.click()
    wait

    # dropdown = browser.find_element_by_id("term_code");
    # print(dropdown)


searchCourse();
