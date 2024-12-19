import React, { useState } from 'react'
import Header from '../components/Header'
import { Box, Container, Grid, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IoGlobeOutline } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import anra from "../images/anra.jpg";
import Footer2 from '../components/Footer2';
import WhatsappBtn from '../components/WhatsappBtn';


const countries = [
  { name: "International", flag: <div className='flex items-center'><MdCall /><IoGlobeOutline /></div>, code: "+91" },
  { name: "Afghanistan", flag: "https://flagpedia.net/data/flags/w702/af.webp?v=un", code: "+98" },
  { name: "Aland Islands", flag: "https://flagpedia.net/data/flags/w702/ax.webp", code: "+358" },
  { name: "Albania", flag: "https://flagpedia.net/data/flags/w702/al.webp", code: "+355" },
  { name: "Algeria", flag: "https://flagpedia.net/data/flags/w702/dz.webp", code: "+213" },
  { name: "American Samoa", flag: "https://flagpedia.net/data/flags/w702/as.webp", code: "+1" },
  { name: "Andorra", flag: "https://flagpedia.net/data/flags/w702/ad.webp", code: "+376" },
  { name: "Angola", flag: "https://flagpedia.net/data/flags/w702/ao.webp", code: "+244" },
  { name: "Anguilla", flag: "https://flagpedia.net/data/flags/w702/ai.webp", code: "+1" },
  { name: "Antigua and Barbuda", flag: "https://flagpedia.net/data/flags/w702/ag.webp", code: "+1" },
  { name: "Argentina", flag: "https://flagpedia.net/data/flags/w702/ar.webp", code: "+54" },
  { name: "Armenia", flag: "https://flagpedia.net/data/flags/w702/am.webp", code: "+374" },
  { name: "Aruba", flag: "https://flagpedia.net/data/flags/w702/aw.webp", code: "+297" },
  { name: "Ascension Island", flag: "https://flagcdn.com/in.svg", code: "+247" },
  { name: "Australia", flag: "https://flagpedia.net/data/flags/w702/au.webp", code: "+81" },
  { name: "Austria", flag: "https://flagpedia.net/data/flags/w702/at.webp", code: "+43" },
  { name: "Azerbaijan", flag: "https://flagpedia.net/data/flags/w702/az.webp", code: "+994" },
  { name: "Bahamas", flag: "https://flagpedia.net/data/flags/w702/bs.webp", code: "+1" },
  { name: "Bahrain", flag: "https://flagpedia.net/data/flags/w702/bh.webp", code: "+973" },
  { name: "Bangladash", flag: "https://flagpedia.net/data/flags/w702/bd.webp", code: "+880" },
  { name: "Barbados", flag: "https://flagpedia.net/data/flags/w702/bb.webp", code: "+1" },
  { name: "Belarus", flag: "https://flagpedia.net/data/flags/w702/by.webp", code: "+973" },
  { name: "Belgium", flag: "https://flagpedia.net/data/flags/w702/be.webp", code: "+212" },
  { name: "Be1ize", flag: "https://flagpedia.net/data/flags/w702/bz.webp", code: "+260" },
  { name: "Benin", flag: "https://flagpedia.net/data/flags/w702/bj.webp", code: "+967" },
  { name: "Bermuda", flag: "https://flagpedia.net/data/flags/w702/bm.webp", code: "+281" },
  { name: "Bhutan", flag: "https://flagpedia.net/data/flags/w702/bt.webp", code: "+84" },
  { name: "Bolovia", flag: "https://flagpedia.net/data/flags/w702/bo.webp", code: "+44" },
  { name: "Bonaire, Sint Eustatius and Saba", flag: "https://flagcdn.com/us.svg", code: "+90" },
  { name: "Bosma and Herzegovina", flag: "https://flagpedia.net/data/flags/w702/ba.webp", code: "+255" },
  { name: "Botswana", flag: "https://flagpedia.net/data/flags/w702/bw.webp", code: "+265" },
  { name: "Brazil", flag: "https://flagpedia.net/data/flags/w702/br.webp", code: "+46" },
  { name: "British Indian Ocean Territory", flag: "https://flagpedia.net/data/flags/w702/io.webp", code: "+82" },
  { name: "Brunei Darussalam", flag: "https://flagpedia.net/data/flags/w702/bn.webp", code: "+85" },
  { name: "Bulgaria", flag: "https://flagpedia.net/data/flags/w702/bg.webp", code: "+508" },
  { name: "Burkina Faso", flag: "https://flagpedia.net/data/flags/w702/bf.webp", code: "+65" },
  { name: "Burundi", flag: "https://flagpedia.net/data/flags/w702/bi.webp", code: "+262" },
  { name: "Cambodia", flag: "https://flagpedia.net/data/flags/w702/kh.webp", code: "+970" },
  { name: "Cameroon", flag: "https://flagpedia.net/data/flags/w702/cm.webp", code: "+389" },
  { name: "Canada", flag: "https://flagpedia.net/data/flags/w702/ca.webp", code: "+31" },
  { name: "Cape Verde", flag: "https://flagpedia.net/data/flags/w702/cv.webp", code: "+382" },
  { name: "Cayman Islands", flag: "https://flagpedia.net/data/flags/w702/ky.webp", code: "+222" },
  { name: "Central African Republic", flag: "https://flagpedia.net/data/flags/w702/cf.webp", code: "+856" },
  { name: "Chad", flag: "https://flagpedia.net/data/flags/w702/td.webp", code: "+853" },
  { name: "Chile", flag: "https://flagpedia.net/data/flags/w702/cl.webp", code: "+1" },
  { name: "China", flag: "https://flagpedia.net/data/flags/w702/cn.webp", code: "+254" },
  { name: "Christmas Island", flag: "https://flagpedia.net/data/flags/w702/cx.webp", code: "+84" },
  { name: "Cocos (Keeling) Islands", flag: "https://flagpedia.net/data/flags/w702/cc.webp", code: "+82" },
  { name: "Colombia", flag: "https://flagpedia.net/data/flags/w702/co.webp", code: "+1" },
  { name: "Comoros", flag: "https://flagpedia.net/data/flags/w702/km.webp", code: "+1" },
  { name: "Congo", flag: "https://flagcdn.com/in.svg", code: "+1" },
  { name: "Congo, Democratic Republic of the", flag: "https://flagpedia.net/data/flags/w702/cg.webp", code: "+1" },
  { name: "Cook Islands", flag: "https://flagpedia.net/data/flags/w702/ck.webp", code: "+1" },
  { name: "Costa Rica", flag: "https://flagpedia.net/data/flags/w702/cr.webp", code: "+1" },
  { name: "Cote d'Ivoire", flag: "https://flagpedia.net/data/flags/w702/ci.webp", code: "+1" },
  { name: "Croatia", flag: "https://flagpedia.net/data/flags/w702/hr.webp", code: "+254" },
  { name: "Cuba", flag: "https://flagpedia.net/data/flags/w702/cu.webp", code: "+254" },
  { name: "Curacao", flag: "https://flagpedia.net/data/flags/w702/cw.webp", code: "+254" },
  { name: "Cyprus", flag: "https://flagpedia.net/data/flags/w702/cy.webp", code: "+254" },
  { name: "Czech Republic", flag: "https://flagpedia.net/data/flags/w702/cz.webp", code: "+254" },
  { name: "Denmark", flag: "https://flagpedia.net/data/flags/w702/dk.webp", code: "+254" },
  { name: "Djibouti", flag: "https://flagpedia.net/data/flags/w702/dj.webp", code: "+254" },
  { name: "Dominica", flag: "https://flagpedia.net/data/flags/w702/dm.webp", code: "+374" },
  { name: "Dominican Republic", flag: "https://flagpedia.net/data/flags/w702/do.webp", code: "+374" },
  { name: "Ecuador", flag: "https://flagpedia.net/data/flags/w702/ec.webp", code: "+374" },
  { name: "Egypt", flag: "https://flagpedia.net/data/flags/w702/eg.webp", code: "+374" },
  { name: "El Salvador", flag: "https://flagpedia.net/data/flags/w702/sv.webp", code: "+374" },
  { name: "Equatorial Guinea", flag: "https://flagpedia.net/data/flags/w702/gq.webp", code: "+254" },
  { name: "Eritrea", flag: "https://flagpedia.net/data/flags/w702/er.webp", code: "+254" },
  { name: "Estonia", flag: "https://flagpedia.net/data/flags/w702/ee.webp", code: "+254" },
  { name: "Ethiopia", flag: "https://flagpedia.net/data/flags/w702/et.webp", code: "+254" },
  { name: "Falkland Islands", flag: "https://flagpedia.net/data/flags/w702/fk.webp", code: "+54" },
  { name: "Faroe Islands", flag: "https://flagpedia.net/data/flags/w702/fo.webp", code: "+54" },
  { name: "Federated States of Micronesia", flag: "https://flagcdn.com/in.svg", code: "+54" },
  { name: "Fiji", flag: "https://flagpedia.net/data/flags/w702/fj.webp", code: "+54" },
  { name: "Finland", flag: "https://flagpedia.net/data/flags/w702/fi.webp", code: "+54" },
  { name: "France", flag: "https://flagpedia.net/data/flags/w702/fr.webp", code: "+1" },
  { name: "French Guiania", flag: "https://flagpedia.net/data/flags/w702/gf.webp", code: "+973" },
  { name: "French Polynesia", flag: "https://flagpedia.net/data/flags/w702/pf.webp", code: "+973" },
  { name: "Gabon", flag: "https://flagpedia.net/data/flags/w702/ga.webp", code: "+973" },
  { name: "Gambia", flag: "https://flagpedia.net/data/flags/w702/gm.webp", code: "+973" },
  { name: "Georgia", flag: "https://flagpedia.net/data/flags/w702/ge.webp", code: "+973" },
  { name: "Germany", flag: "https://flagpedia.net/data/flags/w702/de.webp", code: "+973" },
  { name: "Ghana", flag: "https://flagpedia.net/data/flags/w702/gh.webp", code: "+973" },
  { name: "Gibralter", flag: "https://flagpedia.net/data/flags/w702/gi.webp", code: "+973" },
  { name: "Greece", flag: "https://flagpedia.net/data/flags/w702/gr.webp", code: "+973" },
  { name: "Greenland", flag: "https://flagpedia.net/data/flags/w702/gl.webp", code: "+973" },
  { name: "Grenada", flag: "https://flagpedia.net/data/flags/w702/gd.webp", code: "+1" },
  { name: "Guadeloupe", flag: "https://flagpedia.net/data/flags/w702/gp.webp", code: "+1" },
  { name: "Guam", flag: "https://flagpedia.net/data/flags/w702/gu.webp", code: "+1" },
  { name: "Guatemala", flag: "https://flagpedia.net/data/flags/w702/gt.webp", code: "+1" },
  { name: "Guernsey", flag: "https://flagpedia.net/data/flags/w702/gg.webp", code: "+1" },
  { name: "Guinea", flag: "https://flagpedia.net/data/flags/w702/gn.webp", code: "+1" },
  { name: "Guinea-Bissau", flag: "https://flagpedia.net/data/flags/w702/gw.webp", code: "+1" },
  { name: "Guyana", flag: "https://flagpedia.net/data/flags/w702/gy.webp", code: "+355" },
  { name: "Haiti", flag: "https://flagpedia.net/data/flags/w702/ht.webp", code: "+355" },
  { name: "Holy See (Vatican City State)", flag: "https://flagpedia.net/data/flags/w702/hm.webp", code: "+355" },
  { name: "Honduras", flag: "https://flagpedia.net/data/flags/w702/hn.webp", code: "+355" },
  { name: "Hong Kong", flag: "https://flagpedia.net/data/flags/w702/hk.webp", code: "+355" },
  { name: "Hungary", flag: "https://flagpedia.net/data/flags/w702/hu.webp", code: "+355" },
  { name: "Iceland", flag: "https://flagpedia.net/data/flags/w702/is.webp", code: "+355" },
  { name: "India", flag: "https://flagcdn.com/in.svg", code: "+91" },
  { name: "Indonesia", flag: "https://flagpedia.net/data/flags/w702/id.webp", code: "+355" },
  { name: "Iran", flag: "https://flagpedia.net/data/flags/w702/ir.webp", code: "+355" },
  { name: "Iraq", flag: "https://flagpedia.net/data/flags/w702/iq.webp", code: "+355" },
  { name: "Ireland", flag: "https://flagpedia.net/data/flags/w702/ie.webp", code: "+355" },
  { name: "lsle of Man", flag: "https://flagpedia.net/data/flags/w702/im.webp", code: "+355" },
  { name: "Israel", flag: "https://flagpedia.net/data/flags/w702/il.webp", code: "+355" },
  { name: "Italy", flag: "https://flagpedia.net/data/flags/w702/it.webp", code: "+98" },
  { name: "Jamaica", flag: "https://flagpedia.net/data/flags/w702/jm.webp", code: "+98" },
  { name: "Japan", flag: "https://flagpedia.net/data/flags/w702/jp.webp", code: "+98" },
  { name: "Jersey", flag: "https://flagpedia.net/data/flags/w702/je.webp", code: "+98" },
  { name: "Jardon", flag: "https://flagpedia.net/data/flags/w702/jo.webp", code: "+98" },
  { name: "Kazakhstan", flag: "https://flagpedia.net/data/flags/w702/kz.webp", code: "+98" },
  { name: "Kenya", flag: "https://flagpedia.net/data/flags/w702/ke.webp", code: "+98" },
  { name: "Kiribati", flag: "https://flagpedia.net/data/flags/w702/ki.webp", code: "+244" },
  { name: "Kosovo", flag: "https://flagpedia.net/data/flags/w702/xk.webp", code: "+244" },
  { name: "Kuwait", flag: "https://flagpedia.net/data/flags/w702/kw.webp", code: "+244" },
  { name: "Kyrgyzstan", flag: "https://flagpedia.net/data/flags/w702/kg.webp", code: "+244" },
  { name: "Laos", flag: "https://flagpedia.net/data/flags/w702/la.webp", code: "+244" },
  { name: "Latvia", flag: "https://flagpedia.net/data/flags/w702/lv.webp", code: "+244" },
  { name: "Lebanon", flag: "https://flagpedia.net/data/flags/w702/lb.webp", code: "+244" },
  { name: "Lesotho", flag: "https://flagpedia.net/data/flags/w702/ls.webp", code: "+374" },
  { name: "Liberia", flag: "https://flagpedia.net/data/flags/w702/lr.webp", code: "+374" },
  { name: "Libya", flag: "https://flagpedia.net/data/flags/w702/ly.webp", code: "+374" },
  { name: "Liectensteln", flag: "https://flagpedia.net/data/flags/w702/li.webp", code: "+374" },
  { name: "Lithuania", flag: "https://flagpedia.net/data/flags/w702/lt.webp", code: "+374" },
  { name: "Luxembourg", flag: "https://flagpedia.net/data/flags/w702/lu.webp", code: "+374" },
  { name: "Macao", flag: "https://flagpedia.net/data/flags/w702/mo.webp", code: "+374" },
  { name: "Madagascar", flag: "https://flagpedia.net/data/flags/w702/mg.webp", code: "+54" },
  { name: "Malawi", flag: "https://flagpedia.net/data/flags/w702/mw.webp", code: "+54" },
  { name: "Malaysia", flag: "https://flagpedia.net/data/flags/w702/my.webp", code: "+54" },
  { name: "Maldives", flag: "https://flagpedia.net/data/flags/w702/mv.webp", code: "+54" },
  { name: "Mali", flag: "https://flagpedia.net/data/flags/w702/ml.webp", code: "+54" },
  { name: "Malta", flag: "https://flagpedia.net/data/flags/w702/mt.webp", code: "+54" },
  { name: "Marshall Islands", flag: "https://flagpedia.net/data/flags/w702/mh.webp", code: "+54" },
  { name: "Martinique", flag: "https://flagpedia.net/data/flags/w702/mq.webp", code: "+54" },
  { name: "Mauritania", flag: "https://flagpedia.net/data/flags/w702/mr.webp", code: "+54" },
  { name: "Mauritius", flag: "https://flagpedia.net/data/flags/w702/mu.webp", code: "+54" },
  { name: "Mayotte", flag: "https://flagpedia.net/data/flags/w702/yt.webp", code: "+54" },
  { name: "Mexico", flag: "https://flagpedia.net/data/flags/w702/mx.webp", code: "+54" },
  { name: "Maldova", flag: "https://flagpedia.net/data/flags/w702/md.webp", code: "+54" },
  { name: "Monaco", flag: "https://flagpedia.net/data/flags/w702/mc.webp", code: "+54" },
  { name: "Mongolia", flag: "https://flagpedia.net/data/flags/w702/mn.webp", code: "+54" },
  { name: "Montenegro", flag: "https://flagpedia.net/data/flags/w702/me.webp", code: "+54" },
  { name: "Montserrat", flag: "https://flagpedia.net/data/flags/w702/ms.webp", code: "+54" },
  { name: "Morocco", flag: "https://flagpedia.net/data/flags/w702/ma.webp", code: "+54" },
  { name: "Mozambique", flag: "https://flagpedia.net/data/flags/w702/mz.webp", code: "+54" },
  { name: "Myanmar", flag: "https://flagpedia.net/data/flags/w702/mm.webp", code: "+54" },
  { name: "Namibia", flag: "https://flagpedia.net/data/flags/w702/na.webp", code: "+54" },
  { name: "Nauru", flag: "https://flagpedia.net/data/flags/w702/nr.webp", code: "+54" },
  { name: "Nepal", flag: "https://flagpedia.net/data/flags/w702/np.webp", code: "+54" },
  { name: "Netherlands", flag: "https://flagpedia.net/data/flags/w702/nl.webp", code: "+54" },
  { name: "New Caledonia", flag: "https://flagpedia.net/data/flags/w702/nc.webp", code: "+54" },
  { name: "New Zealand", flag: "https://flagpedia.net/data/flags/w702/nz.webp", code: "+54" },
  { name: "Nicaragua", flag: "https://flagpedia.net/data/flags/w702/ni.webp", code: "+54" },
  { name: "Niger", flag: "https://flagpedia.net/data/flags/w702/ne.webp", code: "+54" },
  { name: "Nigeria", flag: "https://flagpedia.net/data/flags/w702/ng.webp", code: "+54" },
  { name: "Niue", flag: "https://flagpedia.net/data/flags/w702/nu.webp", code: "+54" },
  { name: "Norfalk Island", flag: "https://flagpedia.net/data/flags/w702/nf.webp", code: "+54" },
  { name: "North Korea", flag: "https://flagpedia.net/data/flags/w702/kp.webp", code: "+54" },
  { name: "North Macedonia", flag: "https://flagpedia.net/data/flags/w702/mk.webp", code: "+54" },
  { name: "Northern Mariana Islands", flag: "https://flagpedia.net/data/flags/w702/mp.webp", code: "+244" },
  { name: "Norway", flag: "https://flagpedia.net/data/flags/w702/no.webp", code: "+244" },
  { name: "Oman", flag: "https://flagpedia.net/data/flags/w702/om.webp", code: "+244" },
  { name: "Pakistan", flag: "https://flagpedia.net/data/flags/w702/pk.webp", code: "+244" },
  { name: "Palau", flag: "https://flagpedia.net/data/flags/w702/pw.webp", code: "+244" },
  { name: "Palestine", flag: "https://flagpedia.net/data/flags/w702/ps.webp", code: "+244" },
  { name: "Panama", flag: "https://flagpedia.net/data/flags/w702/pa.webp", code: "+244" },
  { name: "Papua New Guinea", flag: "https://flagpedia.net/data/flags/w702/pg.webp", code: "+244" },
  { name: "Paraguary", flag: "https://flagpedia.net/data/flags/w702/py.webp", code: "+244" },
  { name: "Peru", flag: "https://flagpedia.net/data/flags/w702/pe.webp", code: "+244" },
  { name: "Philippines", flag: "https://flagpedia.net/data/flags/w702/ph.webp", code: "+244" },
  { name: "Poland", flag: "https://flagpedia.net/data/flags/w702/pl.webp", code: "+244" },
  { name: "Portugal", flag: "https://flagpedia.net/data/flags/w702/pt.webp", code: "+244" },
  { name: "Puerto Rico", flag: "https://flagpedia.net/data/flags/w702/pr.webp", code: "+244" },
  { name: "Qatar", flag: "https://flagpedia.net/data/flags/w702/qa.webp", code: "+244" },
  { name: "Reunion", flag: "https://flagpedia.net/data/flags/w702/re.webp", code: "+98" },
  { name: "Romania", flag: "https://flagpedia.net/data/flags/w702/ro.webp", code: "+98" },
  { name: "Russia", flag: "https://flagpedia.net/data/flags/w702/ru.webp", code: "+98" },
  { name: "Rwanda", flag: "https://flagpedia.net/data/flags/w702/rw.webp", code: "+98" },
  { name: "Saint Barthélemy", flag: "https://flagpedia.net/data/flags/w702/bl.webp", code: "+98" },
  { name: "Saint Helena", flag: "https://flagpedia.net/data/flags/w702/sh.webp", code: "+98" },
  { name: "Saint Kitts and Nevis", flag: "https://flagpedia.net/data/flags/w702/kn.webp", code: "+98" },
  { name: "Saint Lucia", flag: "https://flagpedia.net/data/flags/w702/lc.webp", code: "+98" },
  { name: "Saint Martin (French Part)", flag: "https://flagpedia.net/data/flags/w702/mf.webp", code: "+98" },
  { name: "Saint Pierre and Miquelon", flag: "https://flagpedia.net/data/flags/w702/pm.webp", code: "+98" },
  { name: "Saint Vincent and the Grenadines", flag: "https://flagpedia.net/data/flags/w702/vc.webp", code: "+98" },
  { name: "Samoa", flag: "https://flagpedia.net/data/flags/w702/ws.webp", code: "+98" },
  { name: "San Marino", flag: "https://flagpedia.net/data/flags/w702/sm.webp", code: "+98" },
  { name: "Sao Tome and Principe", flag: "https://flagpedia.net/data/flags/w702/st.webp", code: "+98" },
  { name: "Saudi Arabia", flag: "https://flagpedia.net/data/flags/w702/sa.webp", code: "+98" },
  { name: "Senegal", flag: "https://flagpedia.net/data/flags/w702/sn.webp", code: "+98" },
  { name: "Serbia", flag: "https://flagpedia.net/data/flags/w702/rs.webp", code: "+98" },
  { name: "Seychelles", flag: "https://flagpedia.net/data/flags/w702/sc.webp", code: "+98" },
  { name: "Sierra Leone", flag: "https://flagpedia.net/data/flags/w702/sl.webp", code: "+98" },
  { name: "Singapore", flag: "https://flagpedia.net/data/flags/w702/sg.webp", code: "+98" },
  { name: "Sint Maarten", flag: "https://flagpedia.net/data/flags/w702/sx.webp", code: "+98" },
  { name: "Slovakia", flag: "https://flagpedia.net/data/flags/w702/sk.webp", code: "+98" },
  { name: "Slovenia", flag: "https://flagpedia.net/data/flags/w702/si.webp", code: "+98" },
  { name: "Solomon Islands", flag: "https://flagpedia.net/data/flags/w702/sb.webp", code: "+98" },
  { name: "Somalia", flag: "https://flagpedia.net/data/flags/w702/so.webp", code: "+98" },
  { name: "South Africa", flag: "https://flagpedia.net/data/flags/w702/za.webp", code: "+355" },
  { name: "South Korea", flag: "https://flagpedia.net/data/flags/w702/kr.webp", code: "+355" },
  { name: "South Sudan", flag: "https://flagpedia.net/data/flags/w702/ss.webp", code: "+355" },
  { name: "Spain", flag: "https://flagpedia.net/data/flags/w702/es.webp", code: "+355" },
  { name: "Shri Lanka", flag: "https://flagpedia.net/data/flags/w702/lk.webp", code: "+355" },
  { name: "Sudan", flag: "https://flagpedia.net/data/flags/w702/sd.webp", code: "+355" },
  { name: "Suriname", flag: "https://flagpedia.net/data/flags/w702/sr.webp", code: "+355" },
  { name: "Svalbard and Jan Mayen", flag: "https://flagpedia.net/data/flags/w702/sj.webp", code: "+355" },
  { name: "Swaziland", flag: "https://flagpedia.net/data/flags/w702/ch.webp", code: "+355" },
  { name: "Sweden", flag: "https://flagpedia.net/data/flags/w702/se.webp", code: "+355" },
  { name: "Switzerland", flag: "https://flagpedia.net/data/flags/w702/ch.webp", code: "+355" },
  { name: "Syria", flag: "https://flagpedia.net/data/flags/w702/sy.webp", code: "+355" },
  { name: "Taiwan", flag: "https://flagpedia.net/data/flags/w702/tw.webp", code: "+355" },
  { name: "Tajikistan", flag: "https://flagpedia.net/data/flags/w702/tj.webp", code: "+355" },
  { name: "Tanzania", flag: "https://flagpedia.net/data/flags/w702/tz.webp", code: "+355" },
  { name: "Thailand", flag: "https://flagpedia.net/data/flags/w702/th.webp", code: "+1" },
  { name: "Timor-Leste", flag: "https://flagpedia.net/data/flags/w702/tl.webp", code: "+1" },
  { name: "Togo", flag: "https://flagpedia.net/data/flags/w702/tg.webp", code: "+1" },
  { name: "Tokelau", flag: "https://flagpedia.net/data/flags/w702/tk.webp", code: "+1" },
  { name: "Tonga", flag: "https://flagpedia.net/data/flags/w702/to.webp", code: "+1" },
  { name: "Trinidad and Tobago", flag: "https://flagpedia.net/data/flags/w702/tt.webp", code: "+1" },
  { name: "Tristan da Cunha", flag: "https://flagcdn.com/us.svg", code: "+1" },
  { name: "Tunisia", flag: "https://flagpedia.net/data/flags/w702/tn.webp", code: "+1" },
  { name: "Turkey", flag: "https://flagpedia.net/data/flags/w702/tr.webp", code: "+1" },
  { name: "Turkmenistan", flag: "https://flagpedia.net/data/flags/w702/tm.webp", code: "+1" },
  { name: "Turks and Caicos Islands", flag: "https://flagpedia.net/data/flags/w702/tc.webp", code: "+1" },
  { name: "Tuvalu", flag: "https://flagpedia.net/data/flags/w702/tv.webp", code: "+1" },
  { name: "Uganda", flag: "https://flagpedia.net/data/flags/w702/ug.webp", code: "+1" },
  { name: "Ukraine", flag: "https://flagpedia.net/data/flags/w702/ua.webp", code: "+1" },
  { name: "United Arab Emirates", flag: "https://flagpedia.net/data/flags/w702/ae.webp", code: "+973" },
  { name: "United Kingdom", flag: "https://flagpedia.net/data/flags/w702/gb.webp", code: "+973" },
  { name: "United States", flag: "https://flagpedia.net/data/flags/w702/us.webp", code: "+973" },
  { name: "Uruguay", flag: "https://flagpedia.net/data/flags/w702/uy.webp", code: "+973" },
  { name: "Uzbekistan", flag: "https://flagpedia.net/data/flags/w702/uz.webp", code: "+973" },
  { name: "Vanuatu", flag: "https://flagpedia.net/data/flags/w702/vu.webp", code: "+973" },
  { name: "Venezue1a", flag: "https://flagpedia.net/data/flags/w702/ve.webp", code: "+973" },
  { name: "Vietnam", flag: "https://flagpedia.net/data/flags/w702/vn.webp", code: "+973" },
  { name: "Virgin Islands, British", flag: "https://flagpedia.net/data/flags/w702/vg.webp", code: "+973" },
  { name: "Virgin Islands, U.S.", flag: "https://flagpedia.net/data/flags/w702/vi.webp", code: "+973" },
  { name: "Wa11is and Futuna", flag: "https://flagpedia.net/data/flags/w702/wf.webp", code: "+973" },
  { name: "Western Sahara", flag: "https://flagpedia.net/data/flags/w702/eh.webp", code: "+973" },
  { name: "Yemen", flag: "https://flagpedia.net/data/flags/w702/ye.webp", code: "+973" },
  { name: "Zambia", flag: "https://flagpedia.net/data/flags/w702/zm.webp", code: "+973" },
  { name: "Zimbabwe", flag: "https://flagpedia.net/data/flags/w702/zw.webp", code: "+54" }
];

const Contact = () => {

  const [selectedCountry, setSelectedCountry] = useState("India");

  const handleChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <Header tx="Contacts" />
      <div className='bg-[#1f1f1f] text-white pb-6'>
        <Container maxWidth={false} className='bg-[#181818] pt-44 '>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} className='pb-20'>
              <p className='text-3xl uppercase  ff leading-[46px]'>we will call you back, answer your questions and will find the solution for any task you have</p>
              <p className='text-2xl ff text-[#c9c9c9] mt-8 mb-14'>Discussion of the project does not oblige you to anything: we will tell you about ourselves and options for implementing your ideas, and you will decide on cooperation.</p>
              <TextField
                id="standard-basic"
                placeholder="Enter your name*"
                variant="standard"
                sx={{
                  width: "55%",
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#b8b8b8",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#b8b8b8",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#b8b8b8",
                  },
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#b8b8b8",
                    opacity: 1,
                  },
                }}
              />
              <div className='flex items-center mt-8 mb-20'>
                <FormControl
                  sx={{
                    m: 0,
                    minWidth: 60,
                    border: "none",
                    borderBottom: "2px solid #6f6f6f",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                >
                  <Select
                    value={selectedCountry}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Select a country" }}
                    sx={{
                      "& .MuiSelect-select": {
                        padding: 0,
                      }, "& .MuiSelect-icon": {
                        color: "#6a6a6a",
                      },
                      "&:focus": {
                        backgroundColor: "transparent",
                      },
                    }}
                    renderValue={(value) => {
                      if (!value) {
                        return <em>None</em>;
                      }
                      const selected = countries.find((country) => country.name === value);
                      return (
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          {selected.name === "International" ? (
                            selected.flag
                          ) : (
                            <img
                              src={selected.flag}
                              alt={`${selected.name} flag`}
                              width={30}
                              height={20}
                              style={{ borderRadius: "4px" }}
                            />
                          )}
                          <span className='text-white'> {`${selected.code}`}</span>
                        </Box>
                      );
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {countries.map((country, i) => (
                      <MenuItem key={country.name} value={country.name}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          {i === 0 ? (
                            country.flag
                          ) : (
                            <img
                              src={country.flag}
                              alt={`${country.name} flag`}
                              width={30}
                              height={20}
                              style={{ borderRadius: "4px" }}
                            />
                          )}
                          {`${country.name}`}
                        </Box>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <TextField
                  id="standard-basic"
                  variant="standard"
                  sx={{
                    width: "37%",
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#b8b8b8",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "#b8b8b8",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#b8b8b8",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",
                    },

                  }}
                /></div>  <a href='#' className='underline decoration-[#6f6f6f] self-end ff hover:no-underline '>SEND</a> <p className='text-[#acacac] ff mt-10 sm:mt-16 mb-20'>By clicking on the “send” button, I agree to the terms of the <span className='text-white'>privacy policy</span></p>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>

                  <p className='ff uppercase'>Order a project</p>
                  <p className='text-[#9d9d9d] mt-4 '>+79312705454</p>
                  <p className='text-[#9d9d9d] mt-4 ff'>welcome@studia-54.com</p>
                  <p className='ff mt-10'>FOR COOPERATION</p>
                  <p className='text-[#9d9d9d] mt-4 ff'>partners@studia-54.com</p>
                </Grid>
                <Grid item xs={12} md={6}>
                  <p className='ff'>DUBAI</p>
                  <p className='text-[#9d9d9d] mt-4 '>+97145604954</p>
                  <p className='text-[#9d9d9d] mt-4 ff'>DMCC, Dubai, UAE (international representation)</p>

                  <p className='ff mt-9'>ST. PETERSBURG</p>
                  <p className='text-[#9d9d9d] mt-4 ff'>191014, St. Petersburg, Novgorodskaya 23A, office 340</p>
                </Grid>

              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={anra} alt='dark' className='w-full h-full' />
            </Grid>

          </Grid>
        </Container>

        <Footer2 />
        <WhatsappBtn />
      </div>
    </div>
  )
}

export default Contact