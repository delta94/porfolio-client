import React from 'react';
import { Row, Col, Form, Input, Select, Icon, Button } from 'antd';
import styles from './Contact.module.scss';

const { Option } = Select;
const { TextArea } = Input;

const links = [
    {
        icon: 'google',
        link: 'mailto:luannguyentrong98@gmail.com',
    },
    {
        icon: 'instagram',
        link: 'https://www.instagram.com/bk_hardware',
    },
    {
        icon: 'twitter',
        link: 'https://www.twitter.com',
    },
    {
        icon: 'github',
        link: 'https://www.github.com/luantnguyen'
    },
    {
        icon: 'medium',
        link: 'https://www.medium.com',
    },
    {
        icon: 'codepen',
        link: 'https://www.codepen.com',
    },
];

class Contact extends React.PureComponent {
    handleSubmit = (e) => {
        e.preventDefault();
        const { form } = this.props;
        const errors = form.getFieldsError();
        const errorFields = Object.keys(errors).filter(key => errors[key] !== undefined);
        const normalFields = ['name', 'email', 'message'].filter(field => errorFields.indexOf(field) === -1);
        console.log(errorFields);
        console.log(normalFields);
        let flag = false;
        for (let i = 0; i < normalFields.length; ++i) {
            const field = normalFields[i];
            console.log(field);
            console.log(form.getFieldValue(field));
            if (!form.getFieldValue(field) || form.getFieldValue(field).trim() === '')
            {
                flag = true;
                form.setFields({
                    [field]: {
                        value: '',
                        errors: [new Error(`Please enter your ${field}`)],
                    }
                });
            }
        }
        if (!flag && errorFields.length === 0) {
            console.log('success');
        }
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className={styles.contact}>
                <Row className={styles.slogan}>
                    <div className={styles.sloganCont}>
                        <div className={styles.title}>Contact</div>
                        <div className={styles.text}>
                            Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to <span>luannguyentrong98@gmail.com</span>
                        </div>
                        <div className={styles.follow}>
                            <div className={styles.text}>
                                Want to get connected? Follow me on the social channels below.
                            </div>
                            <div className={styles.linkCont}>
                                <Row gutter={24} className={styles.links}>
                                    {links.map((link, i) => (
                                        <Col key={i} span={4}>
                                            <a href={link.link} target="blank">
                                                <Icon type={link.icon} />
                                            </a>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className={styles.contactForm}>
                    <div className={styles.title}>Get In Touch</div>
                    <Form onSubmit={this.handleSubmit} className={styles.mainForm}>
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item className={styles.name}>
                                    {
                                        getFieldDecorator('name', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please enter your name!',
                                                },
                                                {
                                                    pattern: /^[a-zA-Z ]+$/,
                                                    message: 'Your name is invalid!'
                                                }
                                            ],
                                        })(
                                            <Input placeholder="Name" />
                                        )
                                    }
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className={styles.email}>
                                    {
                                        getFieldDecorator('email', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please enter your email!',
                                                },
                                                {
                                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: 'Your email is invalid!',
                                                }
                                            ]
                                        })(
                                            <Input placeholder="Email"  />
                                        )
                                    }
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item className={styles.topic}>
                            <Select defaultValue="frontend">
                                <Option value="frontend" >Front End</Option>
                                <Option value="backend">Back End</Option>
                                <Option value="AI">Machine Learning</Option>
                                <Option value="mathematics">Mathematics</Option>
                                <Option value="others">Others</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item className={styles.message}>
                            {
                                getFieldDecorator('message', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please enter your message!',
                                        }
                                    ]
                                })(
                                    <TextArea rows={10} placeholder="Enter your message"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item className={styles.submit}>
                            <Button type="primary" className={styles.submitBtn} htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Row>
        )
    }
    
};

export default Form.create({ name: 'contact_form' })(Contact);